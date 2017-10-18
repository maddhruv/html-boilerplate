const gulp = require('gulp');
const pug = require('gulp-pug');
const htmlbeautify = require('gulp-html-beautify');

gulp.task('html', () => {
  return gulp.src('src/html/*.pug')
  .pipe(pug({
    pretty: true,
    doctype: 'html'
  }))
  .pipe(gulp.dest('dist/'))
})

gulp.task('default', ['html'])

gulp.watch('src/html/*.pug', ['html'])
