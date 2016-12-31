const path = require('path');
const HtmlWebpackPlugin   = require('html-webpack-plugin');

module.exports = {
    entry: './client/App.js',

    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'index.js',
    },

    module: {
        loaders: [
        {
            test: /\.js$|\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
               presets: ['react', 'es2015', 'stage-1']
            }
        }
        ]
   },
   plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}