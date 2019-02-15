const gulp          = require('gulp');
const sass          = require('gulp-sass');
const autoprefixer  = require('gulp-autoprefixer');
const browserSync   = require('browser-sync').create();

 
// Static Server + watching scss/html files
gulp.task('serve', function() {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("sass/**/*.scss", gulp.series('sass'));
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('css/style.css').on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src('sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest("css/"));
});

// Prefix CSS file
gulp.task('prefix', () =>
    gulp.src('css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css/'))
);

gulp.task('default', gulp.series('serve'));