var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function (_path, NODE_ENV) {

    NODE_ENV = NODE_ENV || "development";

    return {
        entry: [
            'babel-polyfill',
            './src/app.js'
        ],
        output: {
            path: path.join(_path, 'build'),
            filename: 'bundle.js',
            publicPath: '/'
        },
        module: {
            loaders: [
                {
                    loaders: ['babel-loader'],
                    include: [
                        path.resolve(_path, "src"),
                    ],
                    test: /\.js$/,
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: "index.html",
                template: _path + "/index.html"
            }),
            new webpack.DefinePlugin({
                "process.env": {
                    NODE_ENV: JSON.stringify(NODE_ENV)
                }
            })
        ]
    }
}