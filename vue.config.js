/* eslint-disable */
const VueMarkdownLoader = require('markdown-to-vue-loader')

module.exports = {
  chainWebpack: (config) => {
    config.entry('app')
      .clear()
      .add('./src/guide/main.ts')
      .end()

    config.plugin('html')
      .tap((args) => {
        args[0].template = './src/guide/public/index.html'
        return args
      })
      .end()

    // config.loader(VueMarkdownLoader)
    //   .test(/\.md$/)
    //   .exclude(/(node_modules)/)
    //   .use(VueMarkdownLoader)
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
  }
}
