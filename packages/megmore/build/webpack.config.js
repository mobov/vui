/* eslint-disable */
const HappyPack = require('happypack')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const Config = require('webpack-chain')
const resolve = file => require('path').resolve(__dirname, file)
const config = new Config()

config.entry('index')
  .add('./src/lib/index.ts')
  .end()

config.output
  .path(resolve('../lib'))
  .publicPath('/lib/')
  .library('Megmore')
  .libraryTarget('umd')
  .libraryExport('default')
  .globalObject('typeof self !== \'undefined\' ? self : this')

config.externals({vue: {
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue',
    root: 'Vue'
  }})

config.resolve
  .extensions
  .merge(['.wasm', '.mjs', '.js', '.jsx', '.vue', '.json'])
  .end()
  .alias
  .set('@', resolve('src'))

module.exports = config.toConfig()
// module.exports = {
//
//   node: {
//     fs: 'empty'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.[jt]s$/,
//         use: 'happypack/loader?id=scripts',
//         exclude: /node_modules/
//       },
//       // {
//       //   test: /\.css$/,
//       //   use:ExtractTextPlugin.extract({
//       //     fallback:"style-loader",
//       //     use:"css-loader"
//       //   })
//       // },
//       // {
//       //   test: /\.scss$/,
//       //   use: ExtractTextPlugin.extract({
//       //     fallback:"style-loader",
//       //     use:[{
//       //       loader:"css-loader"
//       //     },{
//       //       loader:"sass-loader"
//       //     }]
//       //   })
//       // }
//     ]
//   },
//   plugins: [
//     new ForkTsCheckerWebpackPlugin({
//       checkSyntacticErrors: true,
//       tsconfig: resolve('../tsconfig.json')
//     }),
//     new HappyPack({
//       id: 'scripts',
//       loaders: [
//         'babel-loader',
//         {
//           loader: 'ts-loader',
//           options: { happyPackMode: true }
//         }
//       ]
//     })
//   ]
// }
