
var gulp = require('gulp');

var destino ="./despliegue";
var srcHTML="./src/html/*.html";
var srcJS="./src/js/*.js";

gulp.task("copiarJquery", function() {

    gulp.src(srcHTML)
        .pipe(gulp.dest(destino));

    gulp.src(srcJS)
        .pipe(gulp.dest(destino));
});
