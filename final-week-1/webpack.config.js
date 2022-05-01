const path = require("path");
module.exports = {
    mode: "production",
    entry:"./src/app.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        static: "./dist"
    },
    module: {
        rules:[
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}
