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

gulp.task('images', () => {
  return gulp.src('src/images/*')
  .pipe(gulp.dest('dist/images'))
})

gulp.task('default', ['html', 'manifest', 'images'])
