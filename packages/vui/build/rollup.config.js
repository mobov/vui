import commonjs from 'rollup-plugin-commonjs'
// import vue from 'rollup-plugin-vue'
import sass from 'rollup-plugin-sass'
import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import packages from '../package.json'

const buildType = process.env.MODULE

const rollupConfig = {
  input: 'src/index.ts',
  output: {
    file: `lib/index.${buildType}.js`,
    format: buildType,
    name: 'MobovUI',
  },
  plugins: [
    sass(),
    typescript({
      // objectHashIgnoreUnknownHack: true,
      // rollupCommonJSResolveHack: true,
      // tsconfig: 'tsconfig.json',
      clean: true,
      rootDir: "./src",
      declarationDir:  "./types/",
      useTsconfigDeclarationDir: true,
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }),
    babel({
      runtimeHelpers: true,
      babelrc: false,
      presets: [
        '@vue/app',
        '@babel/preset-env',
        // ['@babel/preset-env', {
        //     modules: 'cjs'
        //   }
        // ],
        ['@vue/babel-preset-jsx', {
            'injectH': false
          }
        ]
      ],
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }),
    resolve({
      // jsnext: true,
      // main: true,
      browser: true,
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    commonjs({
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }),
  ]
}

if (buildType !== 'umd') {
  rollupConfig.external = Object.keys(packages.peerDependencies)
}

export default rollupConfig
