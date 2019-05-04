const DefinePlugin = require('webpack').DefinePlugin
const envConf = require(`./config/${process.env.ENV}`)
const configUtil = require('./config/util')

module.exports = {
  // publicPath: './',
  chainWebpack: (config) => {
    config.plugin('define')
      .use(DefinePlugin, [{
        'ProjectConfig': configUtil.formatEnv(envConf),
      }])
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vmark-loader')
      .loader('vmark-loader')
  }
}
