/* eslint-disable */
module.exports = {
  outputDir:  'lib/',
  filenameHashing: false,
  chainWebpack: (config) => {
    config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.entry('app')
      .clear()
      .add('./src/lib/index.ts')
      .end()

    // config.output.libraryExport('default')

    config.externals({vue: {
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
      root: 'Vue'
    }})

    // config.entry('app')
    //   .add('./src/lib/index.ts')
    //   .end()

    // config.plugin('html')
    //   .tap((args) => {
    //     args[0].template = './src/guide/public/index.html'
    //     return args
    //   })
    //   .end()
    //
    // config.module.rule('md')
    //   .test(/\.md/)
    //   .use('vue-loader')
    //   .loader('vue-loader')
    //   .end()
    //   .use('vue-markdown-loader')
    //   .loader('vue-markdown-loader/lib/markdown-compiler')
    //   .options({
    //     raw: true
    //   })
  }
}
