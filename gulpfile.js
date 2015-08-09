'use strict';
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('browserify'),
    source = require("vinyl-source-stream"),
    reactify = require('reactify'),
    sass  = require('gulp-ruby-sass'),
    watch = require('gulp-watch'),
    watchify = require('watchify'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename');

var path = {
  BUILD: './build',
  SASS: './src/sass/',
  SRC: './src/sass/styles.scss',
  JS: './src/js/**',
  MAIN: './src/js/main.js',
  OUT: 'main.js',

};


gulp.task('sass', function(){
  return sass(path.SRC, { style: 'expanded', loadPath: path.SASS })
    .pipe(gulp.dest(path.BUILD));
});

// use browserify to package js, transform react jsx files, and bundle all together
gulp.task('js', function() {
  var b =  browserify({ debug:true });
  var stream = b
      .add(path.MAIN)
      .transform({}, reactify)
      .on('error', function (err) {
            console.log(err.toString());
            this.emit("end");
        })
      .bundle();  
    return stream
      .on('error', function (err) {
            console.log(err.toString());
            this.emit("end");
        })
      .pipe(source(path.OUT))
      .pipe(gulp.dest(path.BUILD));
});

gulp.task('compress', function() {
  return gulp.src('./build/*.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./build'));
});

gulp.task('minify', function () {
    gulp.src('./build/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./build'));
});

gulp.task('watch', function(){
  //gulp.watch(path.JS, ['transform']);
  gulp.watch(path.SASS +'*.scss', ['sass']);
  gulp.watch(path.JS, ['js']);

});



gulp.task('default', ['watch']);
