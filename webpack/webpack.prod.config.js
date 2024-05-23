const path = require('path');
const common = require("./webpack.common.config");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        filename: 'bundle.js',
    },
});