// import babel from 'rollup-plugin-babel'
// import resolve from 'rollup-plugin-node-resolve'
// import commonjs from 'rollup-plugin-commonjs'
// import { uglify }  from 'rollup-plugin-uglify'
// import { eslint } from 'rollup-plugin-eslint'
// import packages from '../package.json'
import rollupTypescript from 'rollup-plugin-typescript2'
import alias from 'rollup-plugin-alias'
import scss from 'rollup-plugin-scss'
import babel from 'rollup-plugin-babel'
import jsx from 'rollup-plugin-jsx'
// import babelPluginTransformVueJsx from 'babel-plugin-transform-vue-jsx'

const path = require('path')

const config = {
  input: 'src/lib/index.ts',
  output: {
    file: `lib/es/index.js`,
    format: 'es',
    name: 'Megmore'
  },
  plugins: [
    alias({
      '@': path.resolve('src')
    }),
    scss(),
    rollupTypescript(),
    jsx({ factory: 'h' }),
    // babel({
    //   plugins: ['transform-vue-jsx'],
    //   exclude: 'node_modules/**',
    //   runtimeHelpers: true
    // })
    // eslint(),
    // babel({
    //   runtimeHelpers: true,
    // }),
    // resolve({
    //   jsnext: true,
    //   main: true,
    //   browser: true,
    // }),
    // commonjs(),
    // process.env.TYPE === 'umd' ? uglify() : null
  ]
}

// if (process.env.TYPE !== 'umd') {
//   config.external = Object.keys(packages.dependencies)
// }

export default config
