//模块依赖
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var cleancss = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var imgmin = require('gulp-imagemin');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');

//转化sass文件为css文件
gulp.task('sass',function(){
	return gulp.src('css/jike.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'));
});

//压缩css文件
gulp.task('cssmin',function(){
	return gulp.src('css/jike.css')
		.pipe(autoprefixer({
			browsers:['last 4 versions'],
			cascade:true
		}))		//自动添加前缀
		.pipe(cleancss())		//压缩CSS文件
		.pipe(rev())		
		.pipe(gulp.dest('dist/css'))
		.pipe(rev.manifest())	//生成rev-manifest.json
		.pipe(gulp.dest('rev/css'));
});

//压缩js文件
gulp.task('jsmin',function(){
	return gulp.src('js/jike.js')
		.pipe(uglify())
		.pipe(rev())
		.pipe(gulp.dest('dist/js'))
		.pipe(rev.manifest())
		.pipe(gulp.dest('rev/js'));
});

//压缩img文件
gulp.task('imgmin', function () {
    return gulp.src('img/*.{png,jpg,gif}')
        .pipe(imgmin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(rev())
        .pipe(gulp.dest('dist/img'))
        .pipe(rev.manifest())                   
        .pipe(gulp.dest('rev/img'));
});

gulp.task('revCollectorCss',['cssmin','imgmin'],function(){
	return gulp.src(['rev/**/*.json','./dist/css/*.css'])
		.pipe(revCollector())
		.pipe(gulp.dest('dist/css'))
});

gulp.task('revCollectorJs',['jsmin'],function(){
	return gulp.src(['rev/**/*.json','./dist/js/*.js'])
		.pipe(revCollector())
		.pipe(gulp.dest('dist/js'))
});

gulp.task('revCollector',['revCollectorCss','revCollectorJs'],function(){
	var options={
		removeComments:true,	//清除HTML注释
		collapseWhitespace:true,	//删除HTML空格
		removeEmptyAttributes:true	//删除空属性值
	};
	return gulp.src(['rev/**/*.json','./*.html'])
		.pipe(revCollector())
		.pipe(htmlmin(options))
		.pipe(gulp.dest('dist/'));
});

gulp.task('default',['revCollector']);
