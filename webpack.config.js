const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './app/src/js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'app/dist'),
        clean: true
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader','css-loader' ] }
        ]
    },
    plugins: [new HtmlWebpackPlugin ({
        template: './app/src/app.html',
        filename: 'app.html',
        hash: true
    })
    // new CopyWebpackPlugin ({
    //     patterns: [
    //         {from: './app/src/css', to: 'css'}
    //     ]
    // })
]

};