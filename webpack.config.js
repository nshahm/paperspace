var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var bootstrapwebpack = require('bootstrap-webpack!./bootstrap.config.js');
// var autoprefixer = require('autoprefixer');
var webpack = require('webpack');


module.exports = {
    context: __dirname,
    entry: {
        app: ["webpack/hot/dev-server", "./server"]
    },
    output: {
        publicPath: 'http://localhost:3000/',
        path: __dirname + "/dist",
        filename: "main_bundle.js"
    },
    
    plugins : [
        new CopyWebpackPlugin([
            { 
                from : './app/index.html', 
                to : 'index.html',
                toType : 'file'
            },
          
        ], {
            ignore : [
                '*.txt',
                { glob:'**/*', dot:true }
            ]
        }),
        
        new HtmlWebpackPlugin({
            title: 'paperspace',
            template : './app/index.html',
            inject : true,
            files: {
                 css: [ "app.css" ],
                 js: [ "assets/head_bundle.js", "assets/main_bundle.js"],
                 chunks: {
                    head: {
                        entry: "assets/head_bundle.js",
                        css: [ "./assets/style.css" ]
                    },
                    main: {
                        entry: "assets/main_bundle.js",
                        css: []
                    },
                 }
            }
        }), 
        
        new ExtractTextPlugin('assets/style.css', {
            allChunks: false
        })   
        // By default webpack -p mode will uglify
        //  new webpack.optimize.UglifyJsPlugin(
        //     {
        //     sourceMap: true,
        //     mangle: false
        //     })
    ],
    
    module : {
        loaders: [
            { test: /\.ts$/, loader: 'ts', exclude: ['node_modules', 'dist', 'typings'] }
        ]
    },
    
    resolve : {
       extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    }
};