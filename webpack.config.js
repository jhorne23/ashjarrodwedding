var path = require("path");
module.exports = {
    entry: {
        app: ["./app/main.js"],
        itinerary: "./app/countdown.jsx"
    },
    output: {
        path: path.resolve(__dirname, "static"),
        publicPath: "/",
        filename: "[name]-bundle.js"
    },
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