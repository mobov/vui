// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const VueLoaderPlugin = require('vue-loader/lib/plugin')
const rm = require('rimraf')
const webpack = require('webpack')
const path = require('path')

const nodeExternals = require('webpack-node-externals')

const config = {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/index.ts'),
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: 'index.js',
    library: 'megmore',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, '../src')],
        options: {
          presets: [
            '@vue/app'
          ]
        }
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
      // {
      //   test: /\.vue$/,
      //   use: [
      //     {
      //       loader: 'vue-loader',
      //       options: {
      //         compilerOptions: {
      //           preserveWhitespace: false
      //         }
      //       }
      //     }
      //   ]
      // }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  externals: [
    nodeExternals({
      modulesFromFile: true
    })
  ],
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: 'style.css',
    //   chunkFilename: '[name]/style.css'
    // }),
    // new UglifyJsPlugin({
    //   uglifyOptions: {
    //     compress: {
    //       warnings: false
    //     }
    //   },
    //   sourceMap: false,
    //   parallel: true
    // })
    // new VueLoaderPlugin()
  ],
  devtool: 'source-map'
}

rm(path.resolve(__dirname, '../lib'), err => {
  if (err) throw err
  webpack(config, (err, stats) => {
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // if you are using ts-loader, setting this to true will make typescript errors show up during build
      chunks: true,
      chunkModules: true
    }) + '\n\n')

    if (stats.hasErrors()) {
      process.exit(1)
    }
  })
})
