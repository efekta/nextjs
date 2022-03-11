const gulp = require('gulp');
const { series, parallel, dest, src } = require('gulp');
const gulpClean = require('gulp-clean');
const svgSprite = require('gulp-svg-sprite');
const fs = require('fs');

const packageJson = JSON.parse(fs.readFileSync('package.json').toString());

const generateGrpcApi = require('@glonassmobile/codebase/generator/grpc/generateApi').generate;

const clean = () => gulp.src([
    './build',
    'src/client/generated',
], { read: false, allowEmpty: true }).pipe(gulpClean());

const createDirs = (cb) => {
    fs.mkdirSync('build', { recursive: true });
    fs.mkdirSync('src/client/generated', { recursive: true });
    fs.mkdirSync('build/public', { recursive: true });

    cb();
};

const generateClientApi = cb => generateGrpcApi(cb, './src/proto.proto', './src/client/generated', true);

const copyDockerToBuild = () => gulp.src('src/docker/*').pipe(gulp.dest('build'));

const generatePackageJson = (cb) => {

    fs.writeFileSync('build/package.json', JSON.stringify({
        name: packageJson.name,
        version: packageJson.version,
        dependencies: packageJson.devDependencies,
    }, null, 4));

    fs.copyFileSync('./yarn.lock', './build/yarn.lock');

    cb();
};

const svgSprites = () => {
    return src(['src/client/assets/img/svg/**/*.svg'])
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: '../sprite.svg', //sprite file name
                },
            },
        }))
        .pipe(dest(['public/sprite/']));
};

const copyStatic = () => {
    return gulp.src("./public/**/*").pipe(gulp.dest("build/public"));
};

exports.default = series(
    createDirs,
    clean,
    createDirs,
    svgSprites,
    parallel(
        copyDockerToBuild,
        generateClientApi,
        generatePackageJson,
        copyStatic
    ),
);
