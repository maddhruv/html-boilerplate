const gulp = require('gulp')
const pug = require('gulp-pug')

gulp.task('html', () => {
  return gulp.src('src/html/*.pug')
  .pipe(pug({
    pretty: true,
    doctype: 'html'
  }))
  .pipe(gulp.dest('dist/'))
})

gulp.task('manifest', () => {
  return gulp.src('src/*.json')
  .pipe(gulp.dest('dist/'))
})

gulp.task('icons', () => {
  return gulp.src('src/images/icons/*')
  .pipe(gulp.dest('dist/images/icons/'))
})

gulp.task('default', ['html', 'manifest', 'icons'])
