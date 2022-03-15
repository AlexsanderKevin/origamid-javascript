const path = require('path');

module.exports = {
    entry: './js/scritp.js',
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, // termina com ".js",
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
            },
        ],
    },
};
