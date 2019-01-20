/* eslint-disable */
module.exports = {
  chainWebpack: (config) => {
    config.entry('app')
      .clear()
      .add('./src/main.ts')
      .end()

    config.plugin('html')
      .tap((args) => {
        args[0].template = './public/index.html'
        return args
      })
      .end()


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
