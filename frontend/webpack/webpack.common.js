/* eslint no-var: "off" */

var path = require('path');
var webpack = require('webpack');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');

// the clean options to use
var cleanOptions = {
    root: path.resolve(__dirname, '../'),
    verbose: true
}

var config = {

    resolve: {
        extensions: [
            '.js', '.jsx', '.css', '.scss', '.json'
        ],

        modules: [
            'node_modules',
            path.resolve(__dirname, '../src')
        ]
    },

    output: {
        path: path.resolve(__dirname, '../public'),
        filename: '[name].js',
        // chunkFilename is required for CommonsChunkPlugin
        chunkFilename: '[name].js',
        publicPath: '/assets/' // match the output `publicPath`
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, '../src'),
                exclude: /node_modules/,
                loader: 'babel-loader'

            },

            {
                test: /\.(jpg|png|svg|ttf|woff|woff2|otf)?$/,
                loader: 'url-loader?limit=10000'
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(cleanOptions),

        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: 'webpack-bundle-report.html',
            openAnalyzer: false
        }),

        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        })
    ]
};

module.exports = config;