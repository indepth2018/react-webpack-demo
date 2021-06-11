const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
// webpack打包文件体积和依赖关系的可视化
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// 将样式提取到css文件
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const nodeExternals = require('webpack-node-externals');
 module.exports = {
    // devtool: 'inline-source-map',
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            loader:['style-loader', 'css-loader']
        }, {
            test: /\.scss$/,
            loader: ['style-loader', 'css-loader', 'sass-loader']
        }, {
        //     {
        //     test: /\.css$/,
        //     exclude: /node_modules/,
        //     use: ExtractTextPlugin.extract({
        //         fallback: 'style-loader',
        //         use: ['css-loader?modules', 'postcss-loader'],
        //     })
        // }, {
        //     test: /\.css$/,
        //     include: /node_modules/,
        //     // postcss-loader补全css代码的兼容性前缀
        //     use: ExtractTextPlugin.extract({
        //         fallback: 'style-loader',
        //         use: ['css-loader', 'postcss-loader'],
        //     })
        // }, {
            test: /\.(png|svg|jpg|gif)$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'img/[name].[hash:7].[ext]'
            }
        }, {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    devServer: {
        contentBase: './build',
        port: 8081,
        inline: true,
        hot: true
    },
    // externals: [nodeExternals()],
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            template: 'src/index.html'
        }),
        new BundleAnalyzerPlugin({ analyzerPort: 8919 }),
        // new ExtractTextPlugin({ filename: '[name].[contenthash].css', allChunks: false })
    ]
}