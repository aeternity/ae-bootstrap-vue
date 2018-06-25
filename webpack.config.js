/**
 * Importing
 */
const dotenv = require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Build
 */
module.exports = {
  entry: {
    bundle: './index.js'
  },
  output: {
    chunkFilename: '[name]-[hash]-chunk.js',
    filename: '[name].js',
    path: path.join(__dirname, 'build'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the 'scss' and 'sass' values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            css: ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader'
            }),

            // scss loader
            scss: ExtractTextPlugin.extract({
              use: [{
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              }, {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }, {
                loader: 'sass-resources-loader',
                options: {
                  resources: [
                    path.join(__dirname, 'src/styles/globals/_imports.scss'),
                    path.join(__dirname, 'src/styles/globals/_variables.scss'),
                    path.join(__dirname, 'src/styles/globals/_functions.scss'),
                    path.join(__dirname, 'src/styles/globals/_options.scss'),
                    path.join(__dirname, 'src/styles/globals/_mixins.scss')
                  ]
                }
              }],
              fallback: 'vue-style-loader'
            }),

            // Internationalization
            i18n: '@kazupon/vue-i18n-loader'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    // Define global environment variables
    new webpack.EnvironmentPlugin(process.env),
    // Extract CSS
    new ExtractTextPlugin({
      filename: 'bundle.css',
      disable: false,
      allChunks: true
    }),
    // Hot Module Replacement
    new webpack.HotModuleReplacementPlugin(),
    // Common Chunk Splitting
    new webpack.optimize.CommonsChunkPlugin({
      // filename: "vendor.js"
      // (Give the chunk a different name)
      name: "vendor",

      // (with more entries, this ensures that no other module
      //  goes into the vendor chunk)
      minChunks: function(module){
        // This prevents stylesheet resources with the .css or .scss extension
        // from being moved from their original chunk to the vendor chunk
        if(module.resource && (/^.*\.(css|scss)$/).test(module.resource)) {
          return false;
        }

        // split the vendor specific modules
        return module.context && module.context.includes('node_modules');
      }
    })
  ],
  resolve: {
    alias: {
      // Global paths
      '@' : path.resolve(__dirname, 'src'),
      '#' : path.resolve(__dirname, 'public'),

      // Libraries
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.js', '.vue']
  },
  devServer: {
    host: process.env.HOST,
    port: process.env.PORT,
    noInfo: true,
    overlay: true,
    inline: true,
    hot: true,
    disableHostCheck: true,
    historyApiFallback: true,
    contentBase: [
      path.join(__dirname, 'build'),
      path.join(__dirname, 'public')
    ],
    proxy: {}
  },
  performance: { hints: false },
  devtool: 'source-map'
};

if (process.env.NODE_ENV === 'production') {
  // Source Maps
  module.exports.devtool = false;
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    // Uglify
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: { warnings: false }
    }),
    // Loader Options
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]);
}
