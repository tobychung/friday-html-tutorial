//------------- http://localhost:8080/  -------------//

var gulp = require('gulp'),
    jsPath = './js/vendor',
    cssPath = './css/vendor';

var gulpSass = require('gulp-sass'),
    rename = require("gulp-rename"),
    connect = require('gulp-connect');
// tinify = require('gulp-tinify'),
// gulpUglify = require('gulp-uglify'),
// cleanCSS = require('gulp-clean-css'),
// rename = require("gulp-rename"),
// gulpNotify = require("gulp-notify");


//sources watched for livereload
var htmlSources = ['*.html'];
var sassSources = ['./sass/*.scss'];
var jsSources = ['./js/*.js'];
var allSources = htmlSources.concat(sassSources).concat(jsSources);



gulp.task('hello', function() {
    console.log('Hello Gulp.js');
});


//---------  開伺服器  ---------//
gulp.task('server', function() {
    connect.server({
        root: '.',
        livereload: true
    });
});



//---------  監看scss檔案  ---------//
gulp.task('watch', function() {

    gulp.watch(['./sass/*.scss','./components/**/*.scss'], ['compileStyle']);


});


// 複製 bower 檔出來
// gulp.task('copy', function() {

//     //JS
//     gulp.src('./bower_components/bootstrap/dist/js/bootstrap.min.js').pipe(gulp.dest(jsPath));



//     //CSS

//     gulp.src('./bower_components/bootstrap/dist/css/bootstrap.min.css').pipe(gulp.dest(cssPath));
//     gulp.src('./bower_components/font-awesome/css/font-awesome.css').pipe(gulp.dest(cssPath));



// });


// SCSS -> CSS
gulp.task('compileStyle', function() {
    console.log('========== 最後 style.scss → style.css  ==========');
    gulp.src('./sass/style.scss')
        .pipe(gulpSass({
            outputStyle: 'compressed'
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./css/'))
        .pipe(connect.reload());;
});



// SCSS -> CSS
// gulp.task('samescss', function() {
//     console.log('========== SASS → CSS [同資料夾-元件] ==========');
//     gulp.src('./app/**/*.scss', {
//             base: "./"
//         })
//         .pipe(gulpSass({
//             outputStyle: 'compressed'
//         }))
//         .pipe(rename({
//             suffix: '.min'
//         }))
//         .pipe(gulp.dest("."));
// });


// gulp.task('img', function() {

//     gulp.src([
//             './assets/themes/bootstrap-3/beta/img/*.png',
//             './assets/themes/bootstrap-3/beta/img/index/*.png',
//         ], {
//             base: '.'
//         })
//         // .pipe(imagemin())
//         .pipe(imagemin({
//             optimizationLevel: 7, //类型：Number  默认：3  取值范围：0-7（优化等级）
//             progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
//             interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
//             multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
//         }))
//         .pipe(gulp.dest('./assets/themes/bootstrap-3/official/img'));
// });


// gulp.task('img', function() {
//     gulp.src([
//             // './assets/themes/bootstrap-3/beta/img/index/*.png',
//             // './assets/themes/bootstrap-3/beta/img/about/*.png',
//             './assets/themes/bootstrap-3/beta/img/product/*.png',
//             // './assets/themes/bootstrap-3/beta/img/joinus/*.png'

//         ])
//         .pipe(tinify('tgSNskQY-AvfNuJka5fRR7j1OGEG0Ppt'))
//         .pipe(gulp.dest(

//             // './assets/themes/bootstrap-3/official/img/index'
//             // '../assets/themes/bootstrap-3/official/img/about'
//             './assets/themes/bootstrap-3/official/img/product'
//             // './assets/themes/bootstrap-3/official/img/joinus'


//         ));
// });



// gulp.task('js', function() {
//     gulp.src('./assets/themes/bootstrap-3/beta/js/*.js') // 指定要處理的原始 JavaScript 檔案目錄
//         .pipe(gulpUglify()) // 將 JavaScript 做最小化
//         .pipe(rename({
//             suffix: '.min'
//         }))
//         .pipe(gulp.dest('./assets/themes/bootstrap-3/official/js')) // 指定最小化後的 JavaScript 檔案目錄
//         .pipe(gulpNotify("Minify JavaScript Finish")); // 處理結束通知訊息
// });



// gulp.task('css', function() {
//     gulp.src('./assets/themes/bootstrap-3/beta/css/*.css')
//         .pipe(cleanCSS({
//             compatibility: 'ie8'
//         }))
//         .pipe(rename({
//             suffix: '.min'
//         }))
//         .pipe(gulp.dest('./assets/themes/bootstrap-3/official/css'))
//         .pipe(gulpNotify("Minify CSS Finish"));
// });



gulp.task('default', ['server', 'watch']);