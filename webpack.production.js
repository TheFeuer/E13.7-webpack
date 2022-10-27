// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/src/'),
        },
        compress: true,
        port: 9000,
        allowedHosts: ['auto',],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Production',
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin(),

    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
        ],
    },
        stats: {
            children: false,
        }
};