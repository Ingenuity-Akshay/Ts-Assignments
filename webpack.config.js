const path=require('path');

module.exports={
    mode:"development",
    entry:'./ts/index.ts',
    module:{
        rules:[{
            test: /\.tsx?$/,
            use:'ts-loader',
            include:[path.resolve(__dirname,"ts")]
        },
        {
            test:/\.html$/i,
            use:'html-loader',
            include:[path.resolve(__dirname,"dist")]
        },
        {
            test:/\.css$/i,
            use:['style-loader','css-loader'],
            include:[path.resolve(__dirname,"dist")]
        }]
    },
    resolve:{
        extensions:['.ts','.js','.css','.html']
    },

    output:{
        filename:'index.js',
        path:path.resolve(__dirname,'dist')
    },
    devServer:{
        contentBase:path.join(__dirname,'dist'),
        port:"8080",
        compress:true
    }
}