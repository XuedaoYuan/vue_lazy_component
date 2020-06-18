let publicPath = '/'
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpack = require('webpack')
module.exports = {
	publicPath: publicPath, // 根据你的实际情况更改这里
	lintOnSave: true,
    assetsDir: 'static',
    productionSourceMap: false, // 生产打包时不输出map文件，增加打包速度
    configureWebpack: config => {
        
    }
}
