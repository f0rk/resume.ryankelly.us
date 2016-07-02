const gulp = require("gulp");
const gutil = require("gulp-util");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.config.js");

const buildFactory = function(watch) {
    return function(callback) {
        // modify some webpack config options
        const myConfig = Object.create(webpackConfig);
        myConfig.watch = watch;

        // run webpack
        webpack(myConfig, function(err, stats) {
            if(err) throw new gutil.PluginError("webpack:build", err);
            gutil.log("[webpack:build]", stats.toString({
                colors: true
            }));
            if (!watch) {
                callback();
            }
        });
    };
};

// Production build
gulp.task("webpack:build", buildFactory(false));

// Development watch
gulp.task("webpack:watch", buildFactory(true));
