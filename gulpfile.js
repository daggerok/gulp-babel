const
  gulp      = require('gulp'),
  babel     = require('gulp-babel'),
  live      = require('gulp-connect'),
  concat    = require('gulp-concat'),
  srcDir    = './src/',
  buildDir  = './dist/',
  mainCss   = 'main.css',
  mainjs    = 'main.js';

gulp.task('js', () => {
  return gulp.src(srcDir + '**/*.js')
    .pipe(babel({ 
      presets: ['es2015'],
      plugins: ['transform-runtime']
     }))
    .pipe(concat(mainjs))
    .pipe(gulp.dest('dist'))
})

gulp.task('css', () => {
  return gulp.src([srcDir + mainCss])
    .pipe(concat(mainCss))
    .pipe(gulp.dest(buildDir))
    .pipe(live.reload())
})

gulp.task('html', () => {
  return gulp.src([
      srcDir + '**/*.html'
    ], {base: srcDir})
    .pipe(gulp.dest(buildDir))
    .pipe(live.reload())
})

gulp.task('default', ['js', 'css', 'html'])

gulp.task('reload', () => {
  return live.server({
    root: './dist',
    livereload: true,
    base: 'http://localhost',
    port: 8080
  })
})

gulp.task('watch', ['default', 'reload'], () => {
  gulp.watch(srcDir + '**/*.js', ['js'])
  gulp.watch(srcDir + '**/*.css', ['css'])
  gulp.watch(srcDir + '**/*.html', ['html'])
})
