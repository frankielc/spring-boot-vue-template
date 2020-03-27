const gulp = require('gulp');
const del = require('del');
const execa = require('execa');
const browserSync = require('browser-sync').create();


const staticElementsLocationRegex = './dist/**';
const javaStaticElementsDir = './target/classes/';
const springWebServerAddress = "localhost:8080";

/* simply launches spring-boot in dev mode */
function launchSpring() {
    execa('mvn spring-boot:run', {stdio: 'inherit'})
}

/* vue initial launch is run prior to spring so that when it starts resources are in place */
function launchVueInitial(cb) {
    return execa('vue-cli-service build --mode development', {stdio: 'inherit'});
}

/* simply launches spring-boot in dev mode */
function launchVue() {
    execa('vue-cli-service build --watch --mode development', {stdio: 'inherit'})
}

function launchBrowserSync() {
    browserSync.init({
        proxy: {
            target: springWebServerAddress,
            ws: true
        },
        open: false,
        browser: "chrome",
    });
}

function cleanProject() {
    return del(['./dist', './target']);
}

// function makeDistFolder() {
//     return gulp.src('*.*', {read: false})
//         .pipe(gulp.dest('./dist'));
// }

function watchStaticElements() {
    return gulp.watch(staticElementsLocationRegex,
        {
            usePolling: true /* required as without it builds grow exponentially */
        }, gulp.series(transferStaticFiles));
}

function transferStaticFiles() {
    return gulp.src(staticElementsLocationRegex)
        .pipe(gulp.dest(javaStaticElementsDir))
        .pipe(browserSync.stream())
}


exports.clean = cleanProject;
exports.spring = gulp.parallel(launchSpring);
exports.vue = gulp.parallel(launchVue);
exports.dev = gulp.series(
    cleanProject,
    // makeDistFolder,
    launchVueInitial,
    gulp.parallel(watchStaticElements, launchBrowserSync, launchSpring, launchVue)
);
