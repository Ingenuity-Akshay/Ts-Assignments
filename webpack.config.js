const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: "./ts/index.ts",
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.ts$/i,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.css', '.html']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            title: "Weather Info",
            inject: "body",
            template: "index.html",
            meta: {
                'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
            }
        }),
        
    ],
    devServer:{
        contentBase: path.join(__dirname,'build'),
        port:8080,
        open:true
    }
};