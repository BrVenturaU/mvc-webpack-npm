const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const commonConfig = require('./webpack.config.js');

module.exports = merge(commonConfig, {
    devtool: 'inline-source-map',
    mode: 'development',
    plugins: [
        new Dotenv({
            path: './app.development.env',
            systemvars: true
        })
    ]
});