
var gulp = require('gulp');

var carpetaDestino ="./despliegues";

gulp.task("default", function() {

    gulp.src('./src/html/*.html')
        .pipe(gulp.dest(carpetaDestino));

    gulp.src("./src/js/*.js")
        .pipe(gulp.dest(carpetaDestino));
});
