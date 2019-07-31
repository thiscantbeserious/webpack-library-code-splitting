const gulp = require('gulp');
const connect = require('gulp-connect');

function devServer() {
	connect.server({
		livereload: {port:35729},
		name: "Dev",
		hostname: "localhost",
		port: "1234",
		index: "index.html"
	});
}

gulp.task("devServer", devServer);
