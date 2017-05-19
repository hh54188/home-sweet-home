'use strict'

const path = require('path');

module.exports = {
    entry: './src/main.js',
    context: path.join(__dirname, '..'),
    output: {
        filename: './bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                loader: 'babel-loader'
            },
            {
                test: /\.vue/,
                loader: 'vue-loader'
            },
            { 
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
                loader: 'url-loader?limit=100000' 
            },
            {
                test: /\.less/,
                loader: 'less-loader'
            }
        ]
    },
    watch: true
};