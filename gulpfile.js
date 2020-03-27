const gulp = require('gulp');
const del = require('del');
const execa = require('execa');
const browserSync = require('browser-sync').create();

const springWebServerAddress = "localhost:8080";
const staticElementsLocationRegex = './dist/**';
const javaStaticElementsDir = './target/classes/';
const thymeleafOrigin = './src/main/resources/templates/**/*.html';
const thymeleafDestination = './target/classes/templates/';

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

function watchStaticElements() {
    return gulp.watch(staticElementsLocationRegex,
        {usePolling: true /* required as without it builds grow exponentially */},
        gulp.series(transferStaticFiles));
}

function watchThymeleafTemplates() {
    return gulp.watch(thymeleafOrigin,
        {usePolling: true /* required as without it builds grow exponentially */},
        function () {
            return gulp.src(thymeleafOrigin)
                .pipe(gulp.dest(thymeleafDestination))
                .pipe(browserSync.stream());
        });
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
    gulp.parallel(
        watchStaticElements,
        watchThymeleafTemplates,
        launchBrowserSync,
        launchSpring,
        launchVue
    )
);
