var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('watch', function(){
    var watcher = gulp.watch('client/js/*.js');
    watcher.on('change', function(event){
        console.log('File: ' + event.path + ' was changed!');
    });
});

gulp.task('uglify', function(){
    gulp.src('client/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('client/dist'));
});

gulp.task('default', function(){
    console.log('Gulp is running correctly!');
});