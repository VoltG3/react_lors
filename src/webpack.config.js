const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const AssetRevisionPlugin = require('asset-revision-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico',
        }),
        new AssetRevisionPlugin({
            path: path.join(__dirname, 'dist'),
            format: 'json',
            property: 'manifest',
            filename: 'manifest.json',
            template: null,
        }),
    ],
    devServer: {
        historyApiFallback: true,
        port: 3000,
    },
}
