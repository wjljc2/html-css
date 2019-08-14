const path = require('path');  
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    mode:"development", // production  
    entry:{
        index:'./src/index.js'
    },
    output:{
        // 取到绝对路径
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            minify:{
                removeAttributeQuotes:true    
            },
            hash:true,   // 哈希值  没有缓存
            template:'./src/index.html'  // 转化到dist中html文件
        }),
        new ExtractTextPlugin("styles.css"),
    ],
    devServer:{
        contentBase: path.resolve(__dirname,'dist'),  // 根目录
        host:'localhost',     // 地址
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test:/\.(jpg|png|gif)/,
                use:[
                    {
                        loader:"url-loader",
                        options:{
                            limit:500,
                            outputPath:'image/'  // 输出路径
                        }
                    }
                    
                ]
            }
        ]
    }
}