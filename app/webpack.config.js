module.exports = require('./config/webpack.dev.js');

/*var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: {
        app: './src/app.ts',
        vendor: './src/vendor.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: ['css-loader', 'postcss-loader']
                })
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: ['css-loader', 'postcss-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [{
                        loader: 'url-loader',
                        query: {
                            outputPath: 'assets/',
                            publicPath: 'assets/',
                            limit: '10000'
                        }
                    }]
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            template: './app/index.html',
            chunksSortMode: 'dependency'
        })
    ]
};

module.exports = config;*/