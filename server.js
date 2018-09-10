import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import config from './webpack.config.dev'

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  overlay: true,
  stats: { colors: true }
}).listen(3000, (err) => {
  if (err) {
    return console.log(err)
  }

  console.log('Listening on http://localhost:3000')
})