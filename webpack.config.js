var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'example/app.js'),

    devtool: 'source-map',

    devServer: {
        inline: true,
        progress: true,

        // display only errors to reduce the amount of output
        stats: 'errors-only',

        // parse host and port from env so this is easy
        // to customize
        host: process.env.HOST,
        port: process.env.PORT
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            { test: /content(\.min)?\.css$/, loader: "css-loader" },
            {
                test: /\.css$/,
                exclude: /content(\.min)?\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader'
            },
            { test: /\.(jpe?g|gif|png|svg)$/, loader: "file-loader" },
            {
                // Only apply on tinymce/tinymce
                include: require.resolve('tinymce/tinymce'),
                // Export window.tinymce
                loader: 'imports?document=>window.document,this=>window!exports?window.tinymce',
            }
        ]
    }
};
