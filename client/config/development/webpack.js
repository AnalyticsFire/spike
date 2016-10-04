/*global __dirname module*/

import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const CLIENT = __dirname + '/../..';
const ROOT = CLIENT + '/..';

// Identical to development webpack config, except minified.
module.exports = {
  entry: {
    app: __dirname + '/entry'
  },
  devtool: 'source-map',
  output: {
    filename: '[name].js',
    path: __dirname + '/../../../build/development'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules'
      }, {
        test: /\.scss$/,
        loader: 'style-loader!css-loader?modules!sass-loader'
      }, {
        test: /\.json$/,
        loader: 'json'
      }, {
        test: /\.png$/,
        loader: 'url-loader?limit=100000'
      }, {
        test: /\.jpg$/,
        loader: 'file-loader'
      }, {
        test: /\.otf$/,
        loader: 'url?limit=10000&mimetype=application/font-otf'
      },  {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }, {
        test: /\.rt\.html$/,
        loader: 'react-templates-loader?modules=amd'
      }
    ]
  },
  sassLoader: {
    includePaths: [CLIENT, ROOT + '/node_modules']
  },
  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.DefinePlugin({
      'window.NODE_ENV': `"${process.env.NODE_ENV}"`,
      'window.BASE_URL': `"${process.env.API_BASE_URL}"`
    })
  ],
  node: {
    fs: 'empty'
  },
  resolve: {
    alias: {
      api: __dirname + `/../../api/fixture`,
      assets: __dirname + '/../../../server/assets',
      client: __dirname + '/../..',
      shared: __dirname + '/../../../shared'
    }
  }
}
