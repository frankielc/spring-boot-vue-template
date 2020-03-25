const gulp = require('gulp');
const execa = require('execa');

// noinspection JSUnusedLocalSymbols
function launchSpring(callback) {
    execa('mvn spring-boot:run', {stdio: 'inherit'})
}

// noinspection JSUnusedLocalSymbols
function launchVue(callback) {
    execa('vue-cli-service build --watch', {stdio: 'inherit'})
}

exports.spring = gulp.parallel(launchSpring);
exports.vue = gulp.parallel(launchVue);
exports.dev = gulp.parallel(launchSpring, launchVue);