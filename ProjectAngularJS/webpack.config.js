module.exports = (_path, argv = {}) => {
  console.log('================ _path: ', _path);
  console.log('================ CMD configuration array: ', argv);

  const MiniCssExtractPlugin = require('mini-css-extract-plugin');
  const CopyWebpackPlugin = require('copy-webpack-plugin');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const path = require('path');
  const webpack = require('webpack');

  const isTest = !!argv.isForUnitTests; //to run unit tests under Karma
  const isDev = argv.mode === 'development'; //webpack mode
  console.log(`parsed configuration: isTest=${isTest}  isDev=${isDev} mode=${argv.mode}`);

  return {
    mode: argv.mode, // 'development' or 'production'
    devtool: isTest ? (argv.devtool && 'eval-source-map') : 'source-map', //??? it does not work from karma run
    //more info:
    // https://github.com/webpack-contrib/karma-webpack/issues/224
    // https://blog.scottlogic.com/2017/11/01/webpack-source-map-options-quick-guide.html
    context: path.join(__dirname, '/src'),
    devServer: {
      port: 8080,
      historyApiFallback: true
    },
    entry: isTest ? function () { return {}; } : {
      polyfills: './src/polyfills.js',
      vendor: './src/vendor.js',
      index: ['babel-polyfill', './app/app.module.js']
    },
    resolve: {
      alias: {
        // Sources: path.resolve(__dirname, 'app/src'),
        // Common: path.resolve(__dirname, 'app/src/shared'),
        // Constants: path.resolve(__dirname, 'app/src/shared/constants'),
        // MasterCommon: path.resolve(__dirname, 'app/src/master/shared'),
        // MasterSharedModules: path.resolve(__dirname, 'app/src/master/shared/modules'),
        // ContractsModule: path.resolve(__dirname, 'app/src/master/contract')
      },
      extensions: [".js", ".ts"]
    },
    output: isTest ? {} : {
      publicPath: '/',
      path: path.join(__dirname, '/dist'),
      filename: '[name].bundle.js?hash=[chunkhash]'
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: "ts-loader"
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            'ng-annotate-loader',
            'babel-loader'
          ]
        },
        {
          test: /\.html$/,
          exclude: /node_modules/,
          loader: 'raw-loader'
        },
        {
          test: /\.(eot|ttf|woff|woff2)/,
          loader: isTest ? 'ignore-loader' : 'file-loader',
          options: {
            name: '[name].[ext]?hash=[hash]&',
            outputPath: 'assets/fonts'
          }
        },
        {
          test: /(font)+\S*\.(svg)/,
          loader: isTest ? 'ignore-loader' : 'file-loader',
          options: {
            name: '[name].[ext]?hash=[hash]&',
            outputPath: 'assets/fonts'
          }
        },
        {
          test: /\.(png|jpe?g|gif|svg|ico)$/,
          loader: isTest ? 'ignore-loader' : 'url-loader',
          exclude: /node_modules/,
          options: {
            name: '[path][name].[ext]?hash=[hash]&',
            limit: 1024
          }
        },
        {
          test: /\.(css|less)$/,
          use: isTest ? 'ignore-loader' : [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: { root: path.resolve(__dirname, 'app/assets'), sourceMap: true }
            }, {
              loader: 'postcss-loader',
              options: { sourceMap: true }
            }, {
              loader: 'less-loader',
              options: { sourceMap: true }
            }
          ]
        }
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        _: 'underscore'
      }),
      new webpack.DefinePlugin({
        IS_DEBUG: JSON.stringify(isDev),
        FAKE_BASE_URL: JSON.stringify(argv.env && argv.env.fakebaseurl) //pass via cmd if needed
      }),
      /*new BundleAnalyzerPlugin({
        analyzerMode: 'static'
      }),*/
      new CopyWebpackPlugin([
        { from: 'assets/resources', to: 'assets/resources' },
        { from: '../node_modules/angular-i18n/*.js', to: 'i18n/[name].[ext]', toType: 'template' }
      ]),
      new webpack.LoaderOptionsPlugin({
        test: /\.js$/,
        options: {
          splitChunks: {
            cacheGroups: {
              commons: {
                test: /[\\/]node_modules[\\/]/,
                name: "vendors",
                chunks: "all"
              }
            }
          }
        }
      }),
      new MiniCssExtractPlugin({
        filename: '[name].bundle.css?hash=[md5:contenthash:hex:20]&'
      }),
      new HtmlWebpackPlugin({
        template: './index.html',
        favicon: './favicon.ico'
      })
    ]
  };
};
