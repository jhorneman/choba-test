module.exports = {
    entry: './app.js',
    output: {
        path: './dist',
        filename: 'bundle.js',
        publicPath: ''
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: 'node_modules',
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                }
            },
            { test: /\.choba$/, loader: 'raw' },
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.jsx'] 
    }
};
