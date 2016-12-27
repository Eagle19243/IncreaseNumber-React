/*Configuration file for webpack*/

module.exports = {
    /*Entry file*/
    entry: './src/index.js',

    /*Merge file as ./public/bundle.js*/
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },

    /*Configuration to use ES6 and JSX*/
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            }
        ]
    }
};