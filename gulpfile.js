var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util'),
    connect = require('gulp-connect');

// Define file sources
var sassMain = ['development/sass/main.scss'];
var sassSources = ['development/sass/**/*.scss']; // Any .scss file in any sub-directory
var jsSources = ['development/scripts/*.js']; // Any .js file in scripts directory
var htmlFiles = ['*.html'];


// Task to compile SASS files
gulp.task('sass', function () {
    gulp.src(sassMain) // use sassMain file source
        .pipe(sass({
            outputStyle: 'compressed' // Style of compiled CSS
        })
            .on('error', gutil.log)) // Log descriptive errors to the terminal
        .pipe(gulp.dest('assets/css')) // The destination for the compiled file
        .pipe(connect.reload());
});

gulp.task('html', function () {
    gulp.src(htmlFiles)
        .pipe(connect.reload());
});

// Task to concatenate and uglify js files
gulp.task('concat', function () {
    gulp.src(jsSources) // use jsSources
        .pipe(concat('script.js')) // Concat to a file named 'script.js'
        .pipe(uglify()) // Uglify concatenated file
        .pipe(gulp.dest('assets/js'))
        .pipe(connect.reload()); // The destination for the concatenated and uglified file
});


// Task to watch for changes in our file sources
gulp.task('watch', function () {
    gulp.watch(sassMain, ['sass']); // If any changes in 'sassMain', perform 'sass' task
    gulp.watch(sassSources, ['sass']);
    gulp.watch(jsSources, ['concat']);
    gulp.watch(htmlFiles, ['html'])
});


gulp.task('serve', function () {
    connect.server({
        port: 8888,
        livereload: true
    });
});
// Default gulp task
gulp.task('default', ['sass', 'concat', 'watch', 'serve']);