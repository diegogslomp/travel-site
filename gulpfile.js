const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const cssImport = require('postcss-import');
const browserSync = require('browser-sync').create();

gulp.task('default', function () {
  console.log('Hooray - you created a Gulp task.');
});

gulp.task('html', function () {
  console.log('Imagine something useful being done to your HTML here.');
});

gulp.task('styles', function () {
  return gulp
    .src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function () {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  })
  gulp.watch('./app/index.html').on('change', browserSync.reload);
  gulp.watch('./app/assets/styles/**/*.css', gulp.series('styles', 'cssInject'));
});

gulp.task('cssInject', function () {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});