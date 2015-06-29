/// <binding BeforeBuild='default' ProjectOpened='sass:watch' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

// include plug-ins
var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var del = require("del");
var sass = require("gulp-sass");
var ts = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");
var changed = require("gulp-changed");
var newer = require('gulp-newer');
var minifycss = require("gulp-minify-css");

var dependencyScripts = ["bower_components/bootstrap/dist/js/bootstrap.js", "bower_components/bootstrap-material-design/dist/js/material.js", "bower_components/bootstrap-material-design/dist/js/ripples.js"];
var dependencyStylesheets = ["bower_components/bootstrap/dist/css/bootstrap.css", "bower_components/bootstrap-material-design/dist/css/material-fullpalette.css", "bower_components/bootstrap-material-design/dist/css/ripples.css", "bower_components/bootstrap-material-design/dist/css/roboto.css"];
var bootstrapFonts = ["bower_components/bootstrap/dist/fonts/*.*", "bower_components/bootstrap-material-design/dist/fonts/*.*"];
//var uiGridResources = ["bower_components/angular-ui-grid/ui-grid.eot", "bower_components/angular-ui-grid/ui-grid.svg", "bower_components/angular-ui-grid/ui-grid.ttf", "bower_components/angular-ui-grid/ui-grid.woff"];
var customStylesheets = ["styles/sass/styles.scss", "styles/sass/sushi.scss"];
var typescriptFiles = ["app.ts"];

// Delete scripts for dependencies
gulp.task("clean", function () {
	del.sync(["scripts/*.*"]);
	del.sync(["styles/*.*"]);
	del.sync(["fonts/*.*"]);
});

// Combine and minify all scripts from the bower_components folder
gulp.task("dependencyScriptsAndStyles", [], function () {
	gulp.src(dependencyScripts)
		.pipe(newer("scripts/dependencies.min.js"))
		.pipe(uglify())
		.pipe(concat("dependencies.min.js"))
		.pipe(gulp.dest("scripts/"));

	gulp.src(dependencyStylesheets)
		.pipe(newer("styles/dependencies.css"))
		//.pipe(minifycss())
		.pipe(concat("dependencies.css"))
		.pipe(gulp.dest("styles/"));

	gulp.src(bootstrapFonts)
		.pipe(changed("fonts/"))
		.pipe(gulp.dest("fonts/"));

	//gulp.src(uiGridResources)
	//	.pipe(changed("wwwroot/styles/"))
	//	.pipe(gulp.dest("wwwroot/styles/"));
});

gulp.task("sass", [], function () {
	//gulp.src(customStylesheets)
	//	.pipe(newer("wwwroot/styles/styles.min.css"))
	//	.pipe(sass({
	//		sourcemap: true, sourcemapPath: "wwwroot/components/styles"
	//	}))
	//	.pipe(minifycss())
	//	.pipe(concat("styles.min.css"))
	//	.pipe(gulp.dest("wwwroot/styles/"));

	gulp.src(customStylesheets)
		.pipe(newer("styles/styles.css"))
		.pipe(sass())
		.pipe(concat("styles.css"))
		.pipe(gulp.dest("styles/"));
});

gulp.task("sass:watch", function () {
	gulp.watch(customStylesheets, ["sass"]);
});

gulp.task("typescript", [], function () {
	return gulp.src(typescriptFiles)
		.pipe(newer("scripts/application.js"))
		.pipe(sourcemaps.init())
		.pipe(ts({
			noImplicitAny: true,
			out: "application.js"
		}))
		.pipe(sourcemaps.write("./maps"))
		.pipe(gulp.dest("scripts"));
});

gulp.task("typescript:watch", function () {
	gulp.watch(typescriptFiles, ["typescript"]);
});

//Set a default tasks
gulp.task("default", ["clean", "dependencyScriptsAndStyles", "sass"], function () { });