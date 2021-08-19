const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.js');

module.exports = merge(commonConfig, {
    devtool: 'source-map',
    mode: 'production'
});