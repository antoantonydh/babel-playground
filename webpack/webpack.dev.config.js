const path = require('path');
const common = require("./webpack.common.config");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: 'bundle.js',
    },
    devServer: {
        port: 3000,
        static: {
            directory: path.resolve(__dirname, '../dist'),
        },
        devMiddleware: {
            index: 'index.html',
            // write files to dist folder for easy debugging
            writeToDisk: true,
        },
        // show error in browser when error occurs
        client: {
            overlay: true,
        },
        liveReload: false,
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
        ],
    },
});