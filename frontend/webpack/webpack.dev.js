/* eslint no-var: "off" */

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var merge = require('webpack-merge');
var common = require('./webpack.common.js');

var config = merge(common, {
    /*
        best option for development::
        devtool: 'cheap-module-eval-source-map'
        but due to the requirement of css modules for generating sourcemap
        'source-map' is used.
    */
    devtool: 'source-map',

    entry: {
        main: [
            'react-hot-loader/patch',  // activate HMR for React
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
            path.resolve(__dirname, '../src/index.jsx')
        ]
    },

    module: {
        rules: [
            {
                test: /\.(css|scss)?$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract(
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
                ))
            }
        ]
    },

    plugins: [
        // enable HMR globally
        new webpack.HotModuleReplacementPlugin(),

        // prints more readable module names in the browser console on HMR updates
        new webpack.NamedModulesPlugin()
    ]
});

module.exports = config;