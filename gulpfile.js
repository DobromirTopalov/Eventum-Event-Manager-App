/**
 * Created by user on 6/13/2017.
 */

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    cleancss = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create(),
    autoPrefixer = require('gulp-autoprefixer'),
    gulpInject = require('gulp-inject'),
    series = require("stream-series"),
    del = require('del'),
    merge = require('merge-stream');

/* optimize images */
gulp.task('imageOptimize', function () {
   var img = image.pipe(
        tinypngs({
            key: 'ngAww6EW_7Y43VC543b8K74uvgBiDJqK',
            sigFile: 'src/images/.tinypng-sigs',
            log: true
        })
    )
       .pipe(gulp.dest('./build/images'));

    var other = gulp.src('src/images/**/*')
        .pipe(gulp.dest('build/images'));
   return merge(img, other)
});

/*  */
gulp.task('distImageOptimize', function () {
    var imgs = image.pipe(
        tinypngs({
            key: 'gu3SUgQf1WyxcB3_xxRmIEMdt7zWZeh_',
            log: true
        })
    )
        .pipe(gulp.dest('./dist/images'));

    var other = gulp.src('src/images/**/*')
        .pipe(gulp.dest('dist/images'));
    return merge(imgs, other)
});

// /* build js */
// gulp.task('buildJs' ,function () {
//     return gulp.src('./src/js/**/**/*.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('./build/js'));
// });


/* Sass Compiler */
gulp.task('sass', function () {
   gulp.src('./public/sass/**/*.scss')
       .pipe(sourcemaps.init())
       .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
       .pipe(autoPrefixer('last 10 versions'))
       .pipe(sourcemaps.write())
       .pipe(gulp.dest('./public'))
       .pipe(browserSync.reload({
           stream: true
       }))
});

// /* default task for gulp during development */
gulp.task('default', ['sass'], function () {
    gulp.watch('./public/sass/**/*.scss', ['sass']);
});

/* build task */
// gulp.task('build', ['sass', 'fonts', 'buildInject', 'imageOptimize']);

/* distribution bundling distImageOptimize*/
// gulp.task('dist', ['sass', 'distPlugins', 'martAssets', 'distFonts'], function () {
//     return gulp.src('./dist/*.html')
//         .pipe(
//             gulpInject(gulp.src(['dist/js/**', 'dist/css/**', 'dist/style.css']), {relative: true})
//         )
//         .pipe(gulp.dest('dist'))
// });