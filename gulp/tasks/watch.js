const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('watch', function () {
    browserSync.init({
        notify: false,
        browser: "google-chrome",
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