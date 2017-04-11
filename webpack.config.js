'use strict';
/*
*   Author: Pavel Bely
*   Mail: poul-white@yandex.ru
*
*   Webpack config
*/

const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD = process.env.NODE_ENV || 'development';
const config = {};

if(BUILD !== 'production') {
    config['devtool'] = 'eval';
}

config['entry'] = {
    app: './app/entry.js'
};

if(BUILD === 'production') {
    config['output'] = {
        path: `${__dirname}/dist`,
        filename: 'js/[name].js',
        publicPath: './'
    };
} else {
    config['output'] = {
        path: `${__dirname}/dist`,
        filename: 'js/[name].[hash].js',
        publicPath: './'
    };
}

if(BUILD === 'production') {
    config['plugins'] = [
        new CleanWebpackPlugin('dist'),
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            template: './app/view/index.html'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false,
            }
        }),
        new ExtractTextPlugin('css/style.css'),
        new webpack.HotModuleReplacementPlugin()
    ];
} else {
    config['plugins'] = [
        new CleanWebpackPlugin('dist'),
        new HtmlWebpackPlugin({
            template: './app/view/index.html'
        }),
        new ExtractTextPlugin('css/style.css'),
        new webpack.HotModuleReplacementPlugin()
    ];
}

config['resolve'] = {
    modules: ['node_modules'],
    extensions: ['.js', '.json']
};

if(BUILD === 'production') {
    config['module'] = {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        },
        {
            test: /\.html$/,
            use: 'html-loader'
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({fallback:'style-loader', use: 'css-loader'})
        }]
    };
} else {
    config['module'] = {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
                'babel-loader'
                ]
        },
        {
            test: /\.html$/,
            exclude: /node_modules/,
            use: 'html-loader'
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
        }]
    };
}

module.exports = config;
