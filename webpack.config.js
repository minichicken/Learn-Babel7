"use strict";
const path = require("path");
const nodeExternals = require("webpack-node-externals");

const config = {
    entry: path.resolve(__dirname, "src"),
    target: 'node',
    resolve: {
        extensions: ['.tsx', '.ts']
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    externals: [nodeExternals()]
};

module.exports = [config];
