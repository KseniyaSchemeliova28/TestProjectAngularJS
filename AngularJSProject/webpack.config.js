module.exports = (_path, argv = {}) => {

    const path = require('path');
    const isTest = false;
    const MiniCssExtractPlugin = require('mini-css-extract-plugin');
    const CleanCSSPlugin = require('less-plugin-clean-css');
    const CopyWebpackPlugin = require('copy-webpack-plugin');
    const HtmlWebpackPlugin = require('html-webpack-plugin');

    console.log("dist: " + path.join(__dirname, '/dist'));

    return {
        mode: argv.mode, // 'development' or 'production'
        //more info:
        // https://github.com/webpack-contrib/karma-webpack/issues/224
        // https://blog.scottlogic.com/2017/11/01/webpack-source-map-options-quick-guide.html
        context: path.join(__dirname, '/app'),
        devServer: {
            port: 8080,
            historyApiFallback: true
        },
        entry: './index.js',
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
                    test: /\.less$/,
                    use: isTest ? 'ignore-loader' :
                        [
                            {
                            loader: 'style-loader'
                        }, {
                            loader: 'css-loader'
                        }, {
                            loader: 'less-loader'
                        }]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html'
            }),
            new CopyWebpackPlugin([
                {from: 'assets/test-data', to: 'assets/test-data'},

            ])

        ],
        devtool: "#inline-source-map"
    };
};



