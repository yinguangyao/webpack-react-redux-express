var webpack = require('webpack'),
    autoprefixer = require('autoprefixer'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');
var env = process.env.NODE_ENV || 'production';
var config = {
    "entry": {
        "index": "./client/src/main.js",
        "vendor": [
            "react",
            "react-dom"
        ]
    },
    "resolve": {
         "extentions": ["","js"]//当requrie的模块找不到时，添加这些后缀
    },
    "output": {
        "path": "./client/dist/js",
        "filename": "[name].js"
    },
    "watch": true,
    "module": {
        loaders: [{
            test: /\.js|.jsx$/,
            exclude: /node_modules/,
            loader: "babel"
        }, {
            test: /\.(scss|sass|css)$/,
            loader: ExtractTextPlugin.extract({fallbackLoader: "style-loader", loader: "css-loader!postcss-loader!sass-loader"})
        }, {
            test: /\.(png|jpg|jpng|eot|ttf)$/,
            loader: 'url-loader?limit=8192&name=../images/[name].[ext]'
        }]
    },
    postcss: [autoprefixer],
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
        new ExtractTextPlugin("../css/index.css"),
        new webpack.DefinePlugin({
            "process.env": { 
                NODE_ENV: JSON.stringify("production") 
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};


module.exports = config;