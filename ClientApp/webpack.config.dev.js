const merge = require('webpack-merge');
const commonConfig = require('./webpack.config');

module.exports = merge(commonConfig, {
    devtool: 'inline-source-map',
    mode: 'development'
});