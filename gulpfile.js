const gulp = require('gulp');
var browserSync = require('browser-sync').create();
// var reload = browserSync.reload();

gulp.task('serve', function(){
    browserSync.init({
        server:{
            baseDir:'./'
        }
    });

    gulp.watch("*.html").on("change", browserSync.reload);
})

// gulp.task('serve', ['sass'], function() {

//     browserSync.init({
//         server: "./app"
//     });

//     gulp.watch("app/scss/*.scss", ['sass']);
//     gulp.watch("*.html").on('change', browserSync.reload);
// });