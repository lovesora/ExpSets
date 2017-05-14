'use strict';

const webpack = require('webpack');
const path = require("path");

class Paths {
    constructor() {
        this.src = path.resolve(__dirname, "src");
        this.dist = path.resolve(__dirname, "dist");
        // this.vendor = path.resolve(__dirname, "node_modules");
        // this.js = {
        //     dir: path.resolve(__dirname, "src/js"),
        //     lib: {
        //         jquery: path.resolve(__dirname, "src/js/lib/jquery.js"),
        //         react: path.resolve(__dirname, "src/js/lib/jquery.js"),
        //         reactDOM: path.resolve(__dirname, "src/js/lib/jquery.js")
        //     }
        // };
    }
}
var paths = new Paths();

var config = {
    devtool: 'source-map',
    context: paths.src,
    entry: {
        //所有文件会按数组顺序一起打包到 dist/app.bundle.js 一个文件当中。
        app: ['./js/app.js' ,'./app/home/index.js', './app/post/post.js', './app/post/read.js']
    },
    output: {
        path: paths.dist,
        filename: '[name].bundle.js',
        publicPath: '/dist'
    },
    //当在css中@import css出错“can’t find ___”可以开启以下resolve
    resolve: {
        modules: [paths.src, "node_modules"],
        alias: {
            // jquery: path.resolve(paths.src, "vendor/jquery/dist/jquery.min.js"),
            react: path.resolve(paths.src, "vendor/react/react.min.js"),
            react_dom: path.resolve(paths.src, "vendor/react/react-dom.min.js")
        }
    },
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "vendor",
        //     filename: "vendor.bundle.js",
        //     minChunks: Infinity
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "commons.bundle.js",
            minChunks: 2
        }),
        // new webpack.optimize.uglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new webpack.ProvidePlugin({
            // jQuery: "jquery",
            // $: "jquery",
            React: "react",
            ReactDOM: "react_dom"
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: ["es2015", "react"]
                }
            }]
        }, {
            test: /\.css$/,
            //这些 loader 会以数组逆序运行。这意味着 css-loader 会在 style-loader 之前运行。
            use: ["style-loader", {
                loader: "css-loader",
                options: {
                    modules: false,
                    url: false
                }
            }]
        }, {
            test: /\.(sass|scss)$/,
            use: [
                "style-loader", {
                    loader: "css-loader",
                    options: {
                        modules: false,
                        url: false
                    }
                },
                "sass-loader?sourceMap"
            ]
        }
        , {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            use: [{
                loader: "url-loader",
                options: {
                    limit:  50000,
                    name: "[path][name].[ext]"
                }
            }]
        }
        ]
    },
    devServer: {
        contentBase: paths.src
    }
};

module.exports = config;
