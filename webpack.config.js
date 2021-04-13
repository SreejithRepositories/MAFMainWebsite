const path = require('path')

module.exports = {
    entry: path.join(__dirname, '/js/header.js'),
    output: {
        filename: 'header.bundle.js'
    },
    devServer: {
        port: 3010,
        watchContentBase: true
    },
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.{css}$/,
                use: ['css-loader']
            }
        ]
    }
}