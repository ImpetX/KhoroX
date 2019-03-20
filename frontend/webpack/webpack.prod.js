/* eslint no-var: "off" */

var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var merge = require('webpack-merge');
var common = require('./webpack.common.js');

var config = merge(common, {
    mode: 'production',

    /*
        best option for development::
        devtool: 'cheap-module-eval-source-map'
        but due to the requirement of css modules for generating sourcemap
        'source-map' is used.
    */
    devtool: 'cheap-module-source-map',

    entry: {
        main: [
            path.resolve(__dirname, '../src/index.jsx')
        ]
    },

    module: {
        rules: [
            {
                test: /\.(css|scss)?$/,
                use: [
                    'css-hot-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        }
                    },

                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    },

                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
        ]
    },
});

module.exports = config;
