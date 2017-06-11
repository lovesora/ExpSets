'use strict';

const webpack = require('webpack');
const path = require('path');

const paths = {
    context: path.resolve(__dirname, 'src'),
    output: {
        path: path.resolve(__dirname, 'src/public'),
    },
    server: {
        root: path.resolve(__dirname, 'src'),
        publicPath: '/public',
        fallBack: path.resolve(__dirname, 'src/index.html')
    }
}

var config = {
    // performance: {
    //     hints: false
    // },
    devtool: 'source-map',
    context: paths.context,
    entry: {
        //babel-polyfill是为了支持async/await语法
        app: ['babel-polyfill', './index.js']
    },
    output: {
        path: paths.output.path,
        filename: '[name].bundle.js',
        publicPath: paths.server.publicPath
    },
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "commons",
        //     filename: "commons.bundle.js",
        //     minChunks: 2
        // }),
        new webpack.ProvidePlugin({
            React: "react",
            ReactDOM: "react-dom",
            Cookies: "js-cookie"
        }),
        // 默认情况下，React 将会在开发模式，很缓慢，在生产模式下使用 React，不会产生warning，并且速度较快
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ],
    resolve: {
        //当在css中@import css出错“can’t find ___”可以开启以下resolve
        // modules: [paths.context, "node_modules"],

        //为资源文件取别名，缩短引用的路径
        alias: {
            // react: path.resolve(paths.src, "vendor/react/react.min.js"),
        }
    },
    module: {
        rules: [{
            // 模块必须在你的 bundle 中被 require() 过，否则他们将不会被暴露！！！
            test: require.resolve('jquery'),
            use: [{
                loader: 'expose-loader',
                options: '$'
            }, {
                loader: 'expose-loader',
                options: 'jQuery'
            }]
        }, {
            test: /\.js$/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: ["es2015", "stage-1", "stage-3", "react"],
                    plugins: [
                    // es6默认使用严格模式，所以一些采用非严格模式的第三方库会报错，禁用严格模式：
                        ["transform-remove-strict-mode"]
                    ],
                    sourceMaps: true
                }
            }]
        }, {
            test: /\.css$/,
            use: ["style-loader", {
                loader: "css-loader",
                options: {
                    modules: false,
                    url: true
                }
            }]
        }, {
            test: /src[\/\\]components[\/\\].*\.(sass|scss)$/,
            use: [
                "style-loader", {
                    loader: "css-loader",
                    options: {
                        modules: true,
                        url: true
                    }
                },
                "sass-loader?sourceMap"
            ]
        }, {
            test: /(node_modules|src[\/\\]styles)[\/\\].*\.(sass|scss)$/,
            use: [
                "style-loader", {
                    loader: "css-loader",
                    options: {
                        modules: false,
                        url: true
                    }
                },
                "sass-loader?sourceMap"
            ]
        }, {
            test: /\.(gif|jpg|png|woff|woff2|svg|eot|ttf)\??.*$/,
            use: [{
                loader: "url-loader",
                options: {
                    limit: 50000,
                    name: "[path][name].[ext]"
                }
            }]
        }]
    },
    devServer: {
        contentBase: paths.root,
        compress: true
        // historyApiFallback: {
        //     rewrites: [{
        //         from: /^.$/,
        //         to: paths.server.fallBack
        //     }]
        // }
    }
}

module.exports = config;
