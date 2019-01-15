/* eslint-disable */
module.exports = {
  chainWebpack: (config) => {
    config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.entry('megmore')
      .clear()
      .add('./src/lib/index.ts')
      .end()
  }
}
