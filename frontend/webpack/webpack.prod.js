/* eslint no-var: "off" */

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
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
                use: ExtractTextPlugin.extract(
                    {
                        fallback: "style-loader",
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
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
                    }
                )
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),

        new UglifyJsPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
});

module.exports = config;
