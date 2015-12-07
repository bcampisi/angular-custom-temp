'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var path = require('path');
var less = require('gulp-less');
// var sass = require('gulp-sass');
var ngTemplates = require('gulp-ng-templates');
var minifyCSS = require('gulp-minify-css');
var htmlmin = require('gulp-htmlmin');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// cleanup tasks
gulp.task('clean-temps', function () {
    return gulp.src('js/templates.min.js', {read: false})
        .pipe(clean());
});
gulp.task('clean-dist', function () {
    return gulp.src('dist/*.js', {read: false})
        .pipe(clean());
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Less Task
gulp.task('less', function () {
  return gulp.src('./less/app.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'inc') ]
    }))
    //.pipe(minifyCSS())
    .pipe(gulp.dest('./css'));
});
// Compile Our Sass (if using sass uncomment below section and comment out less section above)
// gulp.task('sass', function () {
//   gulp.src('./sass/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     // .pipe(sass({outputStyle: 'compressed'})) //(uncomment to compress output)
//     .pipe(gulp.dest('./css'));
// });

// Concatenate & Minify JS
gulp.task('scripts', ['clean-dist'] , function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Build all angular templates into one file
// simple
gulp.task('templates', function () {
    return gulp.src('templates/*.html')
        .pipe(ngTemplates('jarvisApp'))
        .pipe(gulp.dest('js'));
});
// customizable
// gulp.task('templates', function () {
//     return gulp.src('templates/*.html')
//         .pipe(htmlmin({collapseWhitespace: true}))
//         .pipe(ngTemplates({
//             filename: 'templates.js',
//             module: 'customApp',
//             path: function (path, base) {
//                 return path.replace(base, '').replace('/templates', '');
//             }
//         }))
//         .pipe(gulp.dest('js'));
// });

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('less/app.less', ['less']);
    gulp.watch('js/*.js', ['lint']);
    gulp.watch('templates/**/*.html', ['templates']);
    // gulp.watch('sass/**/*.scss', ['sass']); (if using sass uncomment)
});

// Default Task
gulp.task('default', ['lint', 'less', 'templates', 'watch']);