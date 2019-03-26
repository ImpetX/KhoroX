const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const config = merge(common, {
    mode: 'development',

    /*
        best option for development::
        devtool: 'cheap-module-eval-source-map'
        but due to the requirement of css modules for generating sourcemap
        'source-map' is used.
    */
    devtool: 'source-map',

    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },

    entry: {
        main: [
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
            path.resolve(__dirname, '../src/index.jsx'),
        ],
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                include: path.join(__dirname, '../src'),
                exclude: /node_modules/,
                loader: 'react-hot-loader/webpack',

            },

            {
                test: /\.(css|scss)?$/,
                use: [
                    'css-hot-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },

                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },

                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        // enable HMR globally
        new webpack.HotModuleReplacementPlugin(),
    ],
});

module.exports = config;
