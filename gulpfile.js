var gulp = require('gulp');
var debug = require('gulp-debug');
var cleancss = require('gulp-clean-css');   //cssѹ�����
var cssversion = require('gulp-make-css-url-version');   //css��Դ��Ӱ汾��
var uglify = require('gulp-uglify');        //jsѹ�����
var htmlmin = require('gulp-htmlmin');      //htmlѹ�����
var htmlclean = require('gulp-htmlclean');  //html�������
var assetRev = require('gulp-asset-rev');   //�汾���Ʋ��
var runSequence = require('run-sequence');  //�첽ִ�����
var changed = require('gulp-changed');      //�ļ�����У�����
var gulpif = require('gulp-if')             //���� �����������
var plumber = require('gulp-plumber');      //�ݴ���������������������񣬲������������ݣ�
var isScriptAll = true;     //�Ƿ��������ļ���(true|���������ļ�)(false|ֻ�����и��ĵ��ļ�)
var isDebug = true;         //�Ƿ������ʾ ����ͨ�����ļ�
// ѹ��js�ļ�
gulp.task('compressJs', function () {
    var option = {
        // preserveComments: 'all',//��������ע��
        mangle: true,           //���ͣ�Boolean Ĭ�ϣ�true �Ƿ��޸ı�����
        compress: true          //���ͣ�Boolean Ĭ�ϣ�true �Ƿ���ȫѹ��
    }
    return gulp.src(['./public/**/*.js','!./public/**/*.min.js'])  //�ų���js
        .pipe(gulpif(!isScriptAll, changed('./public')))
        .pipe(gulpif(isDebug,debug({title: 'Compress JS:'})))
        .pipe(plumber())
        .pipe(uglify(option))                //����ѹ���������uglify(),�Ժϲ����ļ�����ѹ��
        .pipe(gulp.dest('./public'));         //�����Ŀ��Ŀ¼
});
// ѹ��css�ļ�
gulp.task('compressCss', function () {
    return gulp.src('./public/**/*.css')
        .pipe(gulpif(!isScriptAll, changed('./public')))
        .pipe(gulpif(isDebug,debug({title: 'Compress CSS:'})))
        .pipe(plumber())
        .pipe(cleancss({rebase: false}))
        .pipe(gulp.dest('./public'));
});
// ѹ��html�ļ�
gulp.task('compressHtml', function () {
    var cleanOptions = {
        protect: /<\!--%fooTemplate\b.*?%-->/g,             //���Դ���
        unprotect: /<script [^>]*\btype="text\/x-handlebars-template"[\s\S]+?<\/script>/ig //���⴦��
    }
    var minOption = {
        collapseWhitespace: true,           //ѹ��HTML
        collapseBooleanAttributes: true,    //ʡ�Բ������Ե�ֵ  <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,        //ɾ�����пո�������ֵ    <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,   //ɾ��<script>��type="text/javascript"
        removeStyleLinkTypeAttributes: true,//ɾ��<style>��<link>��type="text/css"
        removeComments: true,               //���HTMLע��
        minifyJS: true,                     //ѹ��ҳ��JS
        minifyCSS: true,                    //ѹ��ҳ��CSS
        minifyURLs: true                    //�滻ҳ��URL
    };
    return gulp.src('./public/**/*.html')
        .pipe(gulpif(isDebug,debug({title: 'Compress HTML:'})))
        .pipe(plumber())
        .pipe(htmlclean(cleanOptions))
        .pipe(htmlmin(minOption))
        .pipe(gulp.dest('./public'));
});
// Ĭ������
gulp.task('default', function () {
    runSequence.options.ignoreUndefinedTasks = true;
    runSequence('compressHtml','compressCss','compressJs');
});