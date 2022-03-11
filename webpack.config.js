const path = require('path')

const { VueLoaderPlugin } = require('vue-loader')


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
    plugins: [
        new VueLoaderPlugin()
    ]
}