const path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //配置打包模式为开发模式
    mode: 'development',
    entry: path.join(__dirname, 'src/index.js'), // 项目入口文件
    output: { // 配置输出选项
        path: path.join(__dirname, 'dist'), // 配置输出的路径
        filename: 'main.js' // 配置输出的文件名
    },
    plugins:[ // 添加plugins节点配置插件
        new htmlWebpackPlugin({
            template:path.join(__dirname, 'src/index.html'),//模板路径
            filename:'index.html'//自动生成的HTML文件的名称
        })
    ],
    // 配置第三方loader模块的
    module:{
        rules: [ // 文件的匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },//处理css文件的规则
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(png|jpg|gif|jpeg|svg)$/, use:['url-loader?limit=28450&name=[hash:8][name].[ext]'] },
            { test:/\.(ttf|woff2|woff|eot)$/,use:['url-loader']},
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, use: 'vue-loader' }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    }
}