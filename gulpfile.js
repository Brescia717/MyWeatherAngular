var gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat'),
    connect = require('gulp-connect');

gulp.task('default', ['webserver'], function() {
  // place code for your default task here
    gulp.run('js');
});

gulp.task('js', function () {
    gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./js'));
});

gulp.watch('./js/*', function () {
     gulp.run('js');
});

 
gulp.task('webserver', function() {
  connect.server();
});