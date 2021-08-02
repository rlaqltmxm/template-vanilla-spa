const path = require('path');

module.exports = {
    mode: "development",
    entry: ['@babel/polyfill', "./src/index"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                },
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        port: 8000,
    },
}
