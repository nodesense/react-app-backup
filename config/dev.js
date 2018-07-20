// Rollup plugins.
import babel from 'rollup-plugin-babel'
import cjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/main.js',
  output: {
    file: 'build/app.js',
    format: 'iife'
  },
  plugins: [
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [ [ 'env', { modules: false } ], 'stage-2', 'stage-0', 'react' ],
      plugins: [ 'external-helpers' ]
    }),
    cjs({
      exclude: 'node_modules/process-es6/**',
      include: [
        'node_modules/**'
        // 'node_modules/create-react-class/**',
        // 'node_modules/fbjs/**',
        // 'node_modules/object-assign/**',
        // 'node_modules/react/**',
        // 'node_modules/react-dom/**',
        // 'node_modules/prop-types/**',
        // 'node_modules/react-loadable/**',
        // 'node_modules/redux-thunk/**',
        // 'node_modules/redux/**',
      ],
      namedExports: {
        'node_modules/react/index.js': ['Children', 'Component',  'PureComponent', 'Fragment', 'createElement'],
        'node_modules/react-dom/index.js': ['render']
      }
    }),
    globals(),
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    resolve({
      browser: true,
      main: true
    })
  ],
  sourcemap: true
}