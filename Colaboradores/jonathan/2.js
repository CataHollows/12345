//librerias requeridas
var gulp = require('gulp');
var carpetaDestino = "../despliegues";
/*
gulp.task('default', function() {
  console.log("no hace nada");
});
*/
gulp.task("copiarFichero", function() {
    gulp
        .src('./src/html/*.*')
        .pipe(gulp.dest(carpetaDestino));


});
