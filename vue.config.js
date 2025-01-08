const { defineConfig } = require('@vue/cli-service')
/* module.exports = defineConfig({
  transpileDependencies: true
}) */
module.exports = {  //build输出位置
  publicPath: '/',
  outputDir: 'D:/Develop/JavaProject/spring-boot-marg-demo/src/main/resources/static',
  productionSourceMap: false,
};
