var babel = require('gulp-babel');
var print = require('gulp-print');
var gulp = require('gulp');

gulp.task('js', function () {
    return gulp.src('src/**/*.js')
        .pipe(print())
        .pipe(babel({ presets: ['latest'] }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['js']);