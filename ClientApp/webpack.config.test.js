const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.js');

module.exports = merge(commonConfig, {
    devtool: 'source-map',
    mode: 'production',
    plugins: [
        new Dotenv({
            path:'./app.test.env',
            systemvars: true
        })
    ],
    optimization: {
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            // `...`,
            new CssMinimizerPlugin(),
        ],
    },
});