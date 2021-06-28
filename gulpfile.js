var gulp = require('gulp'),
    concat = require('gulp-concat'),
    prefix = require('gulp-autoprefixer'),
    sass = require('gulp-sass')(require('sass')),
    sourcemaps = require('gulp-sourcemaps'),
    notifier = require('node-notifier'),
    cleancss = require('gulp-clean-css'),
    minify = require('gulp-minify');

gulp.task('sassCompile', function () {

    return gulp.src(['content/sass/main-rtl.scss', 'content/sass/main-ltr.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', function (err) {
            console.log(`-----------------------------------------------------------------`);
            console.log(err.message);
            console.log(`-----------------------------------------------------------------`);

            notifier.notify(
                {
                    title: 'sass Error Compiling',
                    message: `Error in File : ${err.relativePath} \nError in Line : ${err.line} , Column : ${err.column} `,
                    sound: false,
                    wait: false,
                    timeout: 1
                },
                function (err, response) {
                    // Response is response from notification
                }
            );
            this.emit('end');
        }))
        .pipe(prefix('last 2 versions'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('content/css'));
});
gulp.task('concatMinifyAllRtlcss', function () {

    return gulp.src(['../content/css/vendor/rtl/bootstrapRTL.min.css', '../content/css/vendor/*.css', '../content/css/main-rtl.css'])
        .pipe(sourcemaps.init())
        .pipe(concat('rtlMinStyle.min.css'))
        .pipe(cleancss())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('../content/css/minifiedStyles'));
});
gulp.task('concatMinifyAllLtrcss', function () {

    return gulp.src(['../content/css/vendor/ltr/bootstrapLTR.min.css', '../content/css/vendor/*.css', '../content/css/main-ltr.css'])
        .pipe(sourcemaps.init())
        .pipe(concat('ltrMinStyle.min.css'))
        .pipe(cleancss())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('../content/css/minifiedStyles'));
});


gulp.task('watch', function () {
    gulp.watch(['content/sass/*/*.scss', 'content/sass/*.scss'], gulp.series(['sassCompile']));
    // gulp.watch('content/sass/*/*.scss', gulp.series(['sassCompile','concatMinifyAllRtlcss','concatMinifyAllLtrcss']));

     //gulp.watch('content/Scripts/Pages/*.js', gulp.series('jsCompress'));
});