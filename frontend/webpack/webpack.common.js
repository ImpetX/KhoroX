const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

// the clean options to use
const cleanOptions = {
    root: path.resolve(__dirname, '../'),
    verbose: true,
};

const config = {
    resolve: {
        extensions: [
            '.js', '.jsx', '.css', '.scss', '.json',
        ],

        modules: [
            'node_modules',
            path.resolve(__dirname, '../src'),
        ],
    },

    output: {
        path: path.resolve(__dirname, '../public'),
        filename: '[name].js',
        // chunkFilename is required for CommonsChunkPlugin
        chunkFilename: '[name].js',
        publicPath: '/assets/', // match the output `publicPath`
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                include: path.join(__dirname, '../src'),
                exclude: /node_modules/,
                loader: 'babel-loader',

            },

            {
                test: /\.(jpg|png|svg|ttf|woff|woff2|otf)?$/,
                loader: 'url-loader?limit=10000',
            },
        ],
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'main',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
    },

    plugins: [
        new CleanWebpackPlugin(cleanOptions),

        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: 'webpack-bundle-report.html',
            openAnalyzer: false,
        }),

        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
    ],
};

module.exports = config;
