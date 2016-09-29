
var gulp = require('gulp');

var destino ="C:/Users/elUsuario/Desktop/despliegues";
var srcHTML="./src/html/*.html";

gulp.task("default", function() {
    gulp.src(srcHTML)
        .pipe(gulp.dest(destino))
    });
