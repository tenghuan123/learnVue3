const path = require('path')

const { VueLoaderPlugin } = require('vue-loader')

const { WebpackPluginServe } = require('webpack-plugin-serve')

const CopyPlugin = require('copy-webpack-plugin')


module.exports = {
    mode: 'development',
    entry: ['./src'],
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    devtool: "source-map",

    resolve: {
        extensions: [".vue", ".js", ".json"]
    },

    module: {
        rules: [
            { test: /\.vue$/, use: "vue-loader", include: path.resolve(__dirname, "./src") },
            { test: /\.js$/, include: path.join(__dirname, './src'), use: "babel-loader" },
            { test: /\.css$/, use: [
                'vue-style-loader',
                'css-loader',
            ]}
        ]
    },

    devServer: {
        static:{
            watch: true,
            serveIndex: true,
        }
    },

    plugins: [
        new VueLoaderPlugin(),
        new WebpackPluginServe({
            port: process.env.PORT || 8080,
            static: './dist',
            liveReload: true, // 在线加载模式
            waitForBuild: true, // 等待构建
            host: '127.0.0.1', // Safari 必须设置host: "127.0.0.1" WebpackPluginServe实时重新加载才能工作
        }),
        new CopyPlugin({
            patterns: [
                { from: path.join(__dirname, 'public'), to: path.join(__dirname, 'dist')},
            ]
        })
    ]
}