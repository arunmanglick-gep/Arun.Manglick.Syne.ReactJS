var config = {
    entry: './index.js',

    output:{
        path:'/',
        filename:'dist.js'
    },

    devServer:{
        inline:true,
        port:8080
    },

    module:{
        loaders:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:{
                    presets: ['es2015','react']
                }
            }
        ]
    }
};

module.exports = config;