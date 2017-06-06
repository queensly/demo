var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.resolve('./build'),
        filename:'bundle.js'
    },
    devServer:{
        port:8080,
        inline:true,
        contentBase:'./build'
    },
    module:{
        loaders:[
            {
                test:/\.jsx?$/,
                loader:'babel-loader',
                query:{
                    presets:["react","es2015"]
                },
                exclude:/node_modules/
            },
            {
                test:/\.(png|jpg|gif)$/,
                loader:'url-loader?limit=8192'
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
};