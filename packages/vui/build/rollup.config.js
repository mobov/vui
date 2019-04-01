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
    typescript({
      objectHashIgnoreUnknownHack: true,
      rollupCommonJSResolveHack: true,
      tsconfig: 'tsconfig.json',
      useTsconfigDeclarationDir: true
    }),
    babel({
      runtimeHelpers: true,
      presets: [
        [
          '@vue/babel-preset-jsx',
          {
            'injectH': false
          }
        ]
      ],
      extensions: ['.js', '.ts', '.tsx']
    }),
    resolve({
      // jsnext: true,
      // main: true,
      // browser: true,
      extensions: ['.js', '.ts', '.tsx'],
    }),
    commonjs({
      namedExports: {
        'node_modules/vue-class-component/dist/vue-class-component.common.js': ['createDecorator'],
      },
      extensions: ['.js', '.ts', '.tsx']
    }),

    sass()
  ]
}
console.log( Object.keys(packages.peerDependencies))

if (buildType !== 'umd') {
  rollupConfig.external = Object.keys(packages.peerDependencies)
}

export default rollupConfig
