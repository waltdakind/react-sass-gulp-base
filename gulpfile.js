'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const changed = require('gulp-changed');
const chalk = require('chalk');


const SCSS_SRC = './src/Assets/scss/';
const SCSS_DEST = './public';

gulp.task('hello', function() {
    console.log(chalk.blue('Hello world!'));
  });

  gulp.task('compile_sass', function () {
    return gulp.src(SCSS_SRC)
      .pipe(sass().on('error', sass.logError))
      .pipe(minifyCSS())
      .pipe(rename({suffix: '.min'}))
      .pipe(changed(SCSS_DEST))
      .pipe(gulp.dest(SCSS_DEST));
      
  });
  
  gulp.task('watch_sass', function () {
    gulp.watch(SCSS_SRC, ['compile_sass']);
  });

  gulp.task('default', ['watch_sass', 'hello']);