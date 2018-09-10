import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'

import BaseConfig from './webpack.common'

const GLOBALS = {
  'process.env': {
    'NODE_ENV': JSON.stringify('development')
  },
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'true'))
}

export default merge(BaseConfig, {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './src/public',
    'react-hot-loader/patch',
    'webpack-hot-middleware/?reload=true',
    path.resolve(__dirname, 'src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'app.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin(GLOBALS)
  ]
})