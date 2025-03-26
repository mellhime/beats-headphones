const { src, dest, task, series, parallel, watch } = require('gulp');
const rm = require('gulp-rm');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const devServer = require('browser-sync').create();
const cleanCss = require("gulp-clean-css");
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const rollup = require('gulp-rollup');
const gulpif = require('gulp-if');
const env = process.env.NODE_ENV;

task('clean', () => src('dist/**/*', { read: false }).pipe(rm()))
task("copy:html", () => src('src/index.html').pipe(dest('dist')).pipe(devServer.reload({ stream: true })));

const styles = [
    "src/styles/**/*.css",
    "src/styles/**/*.scss",
];

const fonts = [
    "src/fonts/**/*.ttf",
    "src/fonts/**/*.woff"
];

task("fonts", () => src(fonts, { encoding: false })
    .pipe(dest('dist/fonts'))
)

task('styles', () => src("src/styles/index.scss")
    .pipe(concat('index.min.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpif(env === "prod", cleanCss()))
    .pipe(dest('dist/styles'))
    .pipe(devServer.reload({ stream: true }))
);

task("scripts", () => src('src/**/*.js')
      .pipe(rollup({
          input: 'src/javascript/index.js',
          output: {
              format: 'iife',
              name: 'bundle'
          },
          plugins: [
              babel()
          ]
      }))
    .pipe(concat('index.min.js', { newLine: ";" }))
    .pipe(gulpif(env === "prod", uglify()))
    .pipe(dest('dist/scripts'))
    .pipe(devServer.reload({ stream: true }))
);

task("images", () => src("src/images/**/*.png", { encoding: false })
    .pipe(dest('dist/images'))
)

task("icons", () => src("src/images/icons/*.svg")
    .pipe(dest('dist/images/icons'))
)

task('devServer', () => {
    devServer.init({
        server: {
            baseDir: "dist"
        },
        port: 8000,
        open: false
    })
})

task("watch", () => {
    watch(styles, series("styles"));
    watch("src/javascript/**/*.js", series("scripts"));
    watch("src/*.html", series("copy:html"));
})

task('default', series('clean', parallel('copy:html', 'fonts', 'styles', 'scripts', 'images', 'icons'), parallel('watch', 'devServer')));
task('build', series('clean', parallel('copy:html', 'fonts', 'styles', 'scripts', 'images', 'icons')));
