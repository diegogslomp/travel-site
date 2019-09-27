const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested')

gulp.task('default', function () {
  console.log("Hooray - you created a Gulp task.");
});

gulp.task('html', function () {
  console.log("Imagine something useful being done to your HTML here.");
});

gulp.task('styles', function () {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([autoprefixer, cssvars, nested]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function (done) {
  gulp.watch('./app/index.html', gulp.series('html'));
  gulp.watch('./app/assets/styles/**/*.css', gulp.series('styles'));
  done();
});