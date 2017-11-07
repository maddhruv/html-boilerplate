const gulp = require('gulp')
const pug = require('gulp-pug')

gulp.task('html', () => {
  return gulp.src('src/html/index.pug')
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

gulp.task('bootstrap', () => {
  gulp.src('node_modules/bootstrap/dist/css/bootstrap.css')
  .pipe(gulp.dest('dist/css/'))
})

gulp.task('icons', () => {
  return gulp.src('src/images/icons/*')
  .pipe(gulp.dest('dist/images/icons/'))
})

gulp.task('default', ['html', 'manifest', 'icons', 'bootstrap'])
