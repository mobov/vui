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
  }
}
