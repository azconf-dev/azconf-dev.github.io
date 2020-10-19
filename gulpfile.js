const { src,dest } = require('gulp');
var concat = require('gulp-concat');

function bundlejs() {
    return src( ['assets/js/vendor/modernizr-3.6.0.min.js',
                'assets/js/vendor/jquery-3.4.1.min.js', 
                'assets/js/bootstrap.min.js', 
                'assets/js/popper.min.js',
                'assets/js/waypoints.min.js',
                'assets/js/slick.min.js',
                'assets/js/jquery.magnific-popup.min.js',
                'assets/js/jquery.easing.min.js',
                'assets/js/jquery.countdown.min.js',
                'assets/js/wow.min.js' ,
                'assets/js/main.js'])
    .pipe(concat('bundle.js'))
    .pipe(dest('assets/dist/'));
}

function bundlecss() {
  return src( ['assets/css/bootstrap.min.css',
              'assets/css/flaticon.css',
              'assets/css/LineIcons.css',
              'assets/css/animate.css',
              'assets/css/magnific-popup.css',
              'assets/css/slick.css',
              'assets/css/default.css',
              'assets/css/style.css'     ,
              'assets/css/chat-bot.css'         
              
            ])
  .pipe(concat('bundle.css'))
  .pipe(dest('assets/dist/'));
}

function defaultTask(){
  bundlejs();
  bundlecss();
  return;
}

exports.default = defaultTask