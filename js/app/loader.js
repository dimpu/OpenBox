var imageLoader = (function() {
  var cSpeed = 7;
  var cWidth = 100;
  var cHeight = 100;
  var cTotalFrames = 23;
  var cFrameWidth = 100;
  var cImageSrc = 'images/sprites.gif';

  var cImageTimeout = false;
  var cIndex = 0;
  var cXpos = 0;
  var cPreloaderTimeout = false;
  var SECONDS_BETWEEN_FRAMES = 0;
  return {
    init: function() {},
    startAnimation: function() {
      document.getElementById('loaderImage').style.backgroundImage = 'url(' + cImageSrc + ')';
      document.getElementById('loaderImage').style.width = cWidth + 'px';
      document.getElementById('loaderImage').style.height = cHeight + 'px';

      //FPS = Math.round(100/(maxSpeed+2-speed));
      FPS = Math.round(100 / cSpeed);
      SECONDS_BETWEEN_FRAMES = 1 / FPS;
      cPreloaderTimeout = setTimeout('continueAnimation()', SECONDS_BETWEEN_FRAMES / 1000);
    },

    continueAnimation: function() {
      cXpos += cFrameWidth;
      cIndex += 1;
      if (cIndex >= cTotalFrames) {
        cXpos = 0;
        cIndex = 0;
      }
      if (document.getElementById('loaderImage'))
        document.getElementById('loaderImage').style.backgroundPosition = (-cXpos) + 'px 0';
      cPreloaderTimeout = setTimeout('continueAnimation()', SECONDS_BETWEEN_FRAMES * 1000);
    },
    stopAnimation: function() { //stops animation
      clearTimeout(cPreloaderTimeout);
      cPreloaderTimeout = false;
    },
    imageLoader: function(s, fun) {
      clearTimeout(cImageTimeout);
      cImageTimeout = 0;
      genImage = new Image();
      genImage.onload = function() {
        cImageTimeout = setTimeout(fun, 0)
      };
      genImage.onerror = new Function('alert(\'Could not load the image\')');
      genImage.src = s;
    }

  }
}());