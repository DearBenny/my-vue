const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,  //关闭语法检查


  	//更改默认端口
	devServer: {
		open:false,//自动打开浏览器
		port:9000,	//配置项目启动的规定端口号
		
	},
	
	pages:{
index:{
entry:'src/main.js'
}}
})
