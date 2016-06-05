const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const JS_LOCATIONS = ['./Card.js'];


gulp.task('default', () => {
  return gulp.src('./Card.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .on('error', function(err) {
      console.error(err.message);
      this.emit('end');
    })
    .pipe(gulp.dest('dist'));
});


gulp.task('compile', () => {
  return gulp.src('./Card.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});


gulp.task('watch', () => {
  gulp.watch(JS_LOCATIONS, ['default']);
});

gulp.task('start', ['default', 'watch']);
