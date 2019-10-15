const { src,dest } = require('gulp');
var concat = require('gulp-concat');

function defaultTask() {
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
  
  exports.default = defaultTask