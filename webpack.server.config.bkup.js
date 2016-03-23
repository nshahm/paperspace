var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: {
        app: ["./app/server"]
    },
    devtool : 'source-map',
    target : 'node',
    output: {
        publicPath: 'http://localhost:3000/',
        path: __dirname + "/dist",
        filename: "server.js"
    },
    
    plugins : [
        
    ],
    
    module : {
        loaders: [
            {
                test: /\.ts?$/,
                loader: 'babel-loader?presets[]=es2015!ts-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    
    resolve : {
       extensions: ['', '.webpack.js', '.ts', '.js']
    }
};
