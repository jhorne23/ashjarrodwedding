var path = require("path");
var webpack = require('webpack');
module.exports = {
    entry: {
        app: ["./app/main.js"],
    },
    output: {
        path: path.resolve(__dirname, "static"),
        publicPath: "/assets/",
        filename: "[name]-bundle.js"
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    amd: { jQuery: true },
    historyApiFallback: true,
    module: {
        loaders: [{
                test: /.jsx?$/,
                include: [
                    path.resolve(__dirname, 'app'),
                ],
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    }
};