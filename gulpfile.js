var gulp  = require('gulp')
browserSync = require('browser-sync').create()

gulp.task('serve', function() {
  browserSync.init({
    server: {
        baseDir: ["./","./src/"],
        index: "./src/index.html"
    },
    port:8000,
    notify:false,
    open:false
  })

  gulp.watch("./src/**/*.css",['sass'])
  gulp.watch("./src/**/*.js",["js"])
  gulp.watch("./src/**/*.json",["json"])
  gulp.watch("./src/**/*.html",["html"])
})

gulp.task('sass', function() {
  return gulp.src("./src/css/**/*.css")
    .pipe(browserSync.stream())
})

gulp.task('html', function() {
  return gulp.src("./src/**/*.html")
    .pipe(browserSync.stream())
})

gulp.task('js', function() {
  return gulp.src("./src/**/*.js")
    .pipe(browserSync.stream())
})

gulp.task('json', function() {
  return gulp.src("./src/**/*.json")
    .pipe(browserSync.stream())
})
