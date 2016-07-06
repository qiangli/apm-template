var gulp = require('gulp');
var server = require('gulp-express');
var runSequence = require('run-sequence');
var del = require('del');
var templateCache = require('gulp-angular-templatecache');

gulp.task('dist', function () {
    runSequence('dist:clean', 'dist:files', 'dist:views');
});

gulp.task('dist:views', function() {
    return gulp.src('modules/**/*.html')
        .pipe(templateCache('template/views.js', {module: 'template.views', standalone: true, moduleSystem: 'ES6'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('dist:clean', function (cb) {
    del.sync(['./dist']);
    cb();
});

gulp.task('dist:files', function () {
    gulp.src([
        'modules/**/*',
    ])
    .pipe(gulp.dest('./dist'));
});

gulp.task('server', function () {
    return server.run({
        file: 'app.js'
    });
});

gulp.task('default', ['server']);
