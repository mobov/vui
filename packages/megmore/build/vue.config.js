/* eslint-disable */
module.exports = {
  chainWebpack: (config) => {
    config.entry('app')
      .clear()
      .add('./src/lib/index.ts')
      .end()

    config.output.libraryExport('default')
  }
}
