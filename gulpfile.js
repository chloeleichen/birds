'use strict';
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    react = require('gulp-react'),
    sass  = require('gulp-ruby-sass'),
    watch = require('gulp-watch');

var path = {
  BUILD: 'build',
  SASS: 'src/sass/',
  SRC: 'src/sass/styles.scss',
  JS: 'src/js/script.jsx'
};


gulp.task('transform', function(){
  gulp.src(path.JS)
    .pipe(react().on('error', gutil.log))
    .pipe(gulp.dest(path.BUILD));
});


gulp.task('sass', function(){
  return sass(path.SRC, { style: 'expanded', loadPath: path.SASS })
    .pipe(gulp.dest(path.BUILD));
});

gulp.task('watch', function(){
  gulp.watch(path.JS, ['transform']);
  gulp.watch(path.SASS +'*.scss', ['sass']);
});

gulp.task('default', ['watch']);
