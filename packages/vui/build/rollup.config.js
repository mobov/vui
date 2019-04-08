import { merge } from 'lodash'
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
// import sass from 'rollup-plugin-sass'
import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import packages from '../package.json'

const {version, dependencies} = packages
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
    vue(),
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
    typescript({
      importHelpers: true,
      // objectHashIgnoreUnknownHack: true,
      /// rollupCommonJSResolveHack: true,
      tsconfig: 'tsconfig.json',
      clean: true,
      // rootDir: './src',
      // declarationDir: './types/',
      // useTsconfigDeclarationDir: false,
      extensions
    }),
    babel({
      runtimeHelpers: true,
      babelrc: false,
      presets: [
        // '@babel/preset-env',
        // ['@vue/babel-preset-jsx', {
        //     'injectH': false
        //   }
        // ],
        [
          '@babel/preset-env',
          {
            modules: false
          }
        ],
        '@vue/babel-preset-jsx',
        '@babel/preset-typescript'
      ],
      plugins: [
        // [
        //   '@babel/plugin-transform-runtime',
        //   {
        //     'absoluteRuntime': false,
        //     'corejs': false,
        //     'helpers': true,
        //     'regenerator': true,
        //     'useESModules': false
        //   }
        // ],
        // ["@babel/plugin-proposal-decorators", { "legacy": true }],
        // ["@babel/plugin-proposal-class-properties", { "loose" : true }]
      ],
      // exclude: 'node_modules/@babel/runtime/**',
      extensions,
      exclude: /node_modules/
    })
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
