var path = require('path');

var paths = {
    assets: 'src/main/resources/assets/'
};

module.exports = {
    entry: path.join(__dirname, paths.assets, 'js', 'main.js'),
    output: {
        path: path.join(__dirname, paths.assets),
        filename: 'scripts.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: [ 'es2015' ]
                }
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                loader: "style-loader!css-loader"
            }
        ]
    }
};
