;(function() {
  'use strict';
  var imghero = document.getElementById('tilt-mover'),
      header = document.getElementById('header'),
      tilt = document.getElementById('tilt'),
      btn = document.getElementById('start'),
      body = document.getElementById('body');


      btn.addEventListener('click', function(ev){
        ev.preventDefault();
        body.classList.toggle('front');
      });

  var win = { width: window.innerWidth, height: window.innerHeight };
  function throttle(fn, delay) {
    var allowSample = true;
    return function(e) {
      if (allowSample) {
        allowSample = false;
        setTimeout(function() { allowSample = true; }, delay);
        fn(e);
      }
    };
  }
  
  
  function is_touch_device() {
   return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
  }
   
  if (!is_touch_device()) {
      var exHandler = function(ev){
        imghero.style.WebkitTransform = 'perspective(1000px) translate3d(0,0,0) rotate3d(1,1,1,0deg)';
        imghero.style.transform = 'perspective(1000px) translate3d(0,0,0) rotate3d(1,1,1,0deg)';
      };

      var moveHandler = throttle(function(ev) {
          var xVal = -1/(win.height/2)*ev.clientY + 1,
            yVal = 1/(win.width/2)*ev.clientX - 1,
            transX = 20/(win.width)*ev.clientX - 10,
            transY = 20/(win.height)*ev.clientY - 10,
            transZ = 100/(win.height)*ev.clientY - 50;
            imghero.style.WebkitTransform = 'perspective(1000px) translate3d(' + transX + 'px,' + transY + 'px,' + transZ + 'px) rotate3d(' + xVal + ',' + yVal + ',0,2deg)';
            imghero.style.transform = 'perspective(1000px) translate3d(' + transX + 'px,' + transY + 'px,' + transZ + 'px) rotate3d(' + xVal + ',' + yVal + ',0,2deg)';
        }, 100);

      header.addEventListener('mouseenter', exHandler);
      window.addEventListener('mousemove', moveHandler);
      header.addEventListener('mouseleave', exHandler);
  }

}());
