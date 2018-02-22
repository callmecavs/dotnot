import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

const info = require('./package.json')

const config = {
  input: 'src/deep-access.js',
  plugins: [
    resolve(),
    babel({
      babelrc: false,
      presets: [
        [
          '@babel/preset-env', {
            modules: false,
            targets: {
              browsers: ['last 2 versions']
            }
          }
        ]
      ],
      plugins: [
        "@babel/plugin-proposal-object-rest-spread"
      ]
    })
  ],
  output: [
    {
      file: info.main,
      format: 'umd',
      name: 'deep-access'
    }, {
      file: info.module,
      format: 'es'
    }
  ]
}

export default config