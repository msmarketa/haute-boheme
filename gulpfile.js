const gulp        = require('gulp');
const browserSync = require('browser-sync').create();

// Static server
gulp.task('sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('css/*').on('change', browserSync.reload);
    gulp.watch('index.html').on('change', browserSync.reload);
});
