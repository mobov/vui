import { merge } from 'lodash'
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
// import sass from 'rollup-plugin-sass'
import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import packages from '../package.json'

const { version, dependencies } = packages
const extensions = ['.js', '.jsx', '.ts', '.tsx']
const external = ['@mobov/es-helper', 'vue']
//const external = Object.keys(dependencies)
const name = 'MobovUI'
const banner = `/* ${name} version ${version} */`;

const baseConfig = {
  input: 'src/index.ts',
  output: {
    name,
    banner
  },
  plugins: [
    postcss({extensions: ['.scss'], extract: `lib/style.css`}),
    typescript({
      importHelpers: true,
      // objectHashIgnoreUnknownHack: true,
      /// rollupCommonJSResolveHack: true,
      tsconfig: 'tsconfig.json',
      clean: true,
      // rootDir: './src',
      // declarationDir: './types/',
      useTsconfigDeclarationDir: true,
      extensions
    }),
    vue(),
    babel({
      runtimeHelpers: true,
      babelrc: false,
      presets: [
        '@babel/preset-env',
        '@vue/babel-preset-jsx'
      ],
      extensions,
      exclude: /node_modules/
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs({
      // exclude: /node_modules/,
      include: /node_modules/,
      extensions
    }),
  ]
}

export default [
  merge(baseConfig, {
    output: [{
      file: `lib/index.esm.js`,
      format: 'esm',
      exports: 'named'
    }, {
      file: `lib/index.cjs.js`,
      format: 'cjs',
      exports: 'named'
    }],
    external
  })
]
