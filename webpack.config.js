var path = require('path');
var webpack = require('webpack');

var CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
    entry: {
        'app': './client/js/app.js'
    },

    output: {
        path: './build',
        filename: 'js/app.bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel'
            },
            // Build css loaded with require
        //     {
        //         test: /\.css$/,
        //         loader: "style!css"
        //     }
        //
        ]
    },

    plugins: [
        // copy static files
        new CopyWebpackPlugin([
            { from: './client/img', to: 'img' },
            { from: './client/index.html', to: 'index.html' },
            { from: './client/css', to: 'css' },
            { from: './client/vendor', to: 'vendor' },
            { from: './client/_js', to: 'js' }
        ])
    ]

};

module.exports = config;