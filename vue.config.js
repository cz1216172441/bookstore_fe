module.exports = {
  // 打包 => 静态资源存储路径
  assetsDir: 'static',
  devServer: {
    proxy: 'http://localhost:4000'
  }
}