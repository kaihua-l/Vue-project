const path = require('path');

//用于自动导入script标签，与html页面更新
const htmlWenpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: path.join(__dirname,'./src/main.js'),  //入口，表示要使用webpack打包那个文件
	output:{ //输出文件相关配置
		path:path.join(__dirname,'./dist'), //指定打包好的文件输出到那个目录中去
		filename:'bundle.js'   //这是指定 输出的文件
	},
	plugins:[
		new htmlWenpackPlugin({
			template:path.join(__dirname,'./src/index.html'),
			filename:'index.html'
			})
	],
	module:{
		rules:[
			{test:/\.css$/,use:['style-loader','css-loader']},
			{test:/\.less$/,use:['style-loader','css-loader','less-loader']},
			{test:/\.(jpg|png|gif|bpm|jpeg)$/,use:"url-loader?'limit'='falst'&name=[name].[ext]"},
			{test:/\.(ttf|eot|svg|woff|woff2)$/,use:"url-loader"},
			{test:/\.js$/,use:"babel-loader",exclude:/node_modules/},
			{test:/\.vue$/,use:"vue-loader"}
		]
	}
}