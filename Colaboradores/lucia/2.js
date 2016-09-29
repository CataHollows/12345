//librerias requeridas
var gulp = require('gulp');

var carpetaDestino="C:/Users/AULA 11/Desktop/2/dist";


gulp.task("default", function() {

    gulp.src('./src/html/hola.html')
        .pipe(gulp.dest(carpetaDestino));


});
