import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'

import BaseConfig from './webpack.common'

const GLOBALS = {
  'process.env': {
    'NODE_ENV': JSON.stringify('production')
  },
  __DEV__: false
}

export default merge(BaseConfig, {
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src/index'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin(GLOBALS),
    new FaviconsWebpackPlugin('src/resources/images/logo.png')
  ]
})