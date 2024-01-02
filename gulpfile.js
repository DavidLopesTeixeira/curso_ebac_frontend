//packages
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const iglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const obfuscate = require('gulp-obfuscate');

//Functions

function compilerSass () {
    return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
};

function compressImages () {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
};

function compressJS () {
return gulp.src('./source/scripts/*.js')
.pipe(iglify())
.pipe(obfuscate())
.pipe(gulp.dest('./build/scripts'));
};


// Exports
exports.default = function () {
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilerSass));
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(compressImages));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(compressJS));
};



