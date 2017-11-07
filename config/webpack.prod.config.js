var webpack = require('webpack');
var path = require('path');

// ../ works as well
var APP_DIR = path.resolve(__dirname, '../src');

// ../ works as well
var BUILD_DIR = path.resolve(__dirname, '../dist');

//copy assets folder/static files to dist folder
var CopyWebpackPlugin = require('copy-webpack-plugin');

//generate script and link tags dynamically with hash code
var HtmlWebpackPlugin = require('html-webpack-plugin');

//Useful for extracting import "mystyle.css" used within js code
//used along with css-loaders
var ExtractTextPlugin = require('extract-text-webpack-plugin');

//clear the dist folder for every build
const CleanWebpackPlugin = require('clean-webpack-plugin')


var config = {
  
  entry: {
    app: APP_DIR + '/main.js',
  }, 

  output: {
    path: BUILD_DIR,
    filename: '[name].bundle.[hash].js',
    publicPath: '/', 
  },
 
  module : {
    loaders : [
      {
        test : /\.js?/,
        include : APP_DIR,
        loaders: [ "babel-loader"]
      },


      { test: /\.css$/, 
        use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: {
					loader: "css-loader",
					options: {
						sourceMap: true
					}
				},
				publicPath: "../"
      }) 
     }
    ]
  },
  

  //the config entry given here can be imported into any file using
  //import config from config; 
  //the imported config contains all the development.json content
  externals: {
    config: JSON.stringify(require(path.join(__dirname,  "production.json")))
  },
 

  //debug, es6 to es5 mapping
  devtool: 'source-map',

  plugins: [
    new CleanWebpackPlugin([BUILD_DIR]),

    //define plug-in is useful for defining application specific 
    //constants based on enviroment setting
    new webpack.DefinePlugin ({
      VERSION: JSON.stringify("1.0.0"),
      PRODUCTION: JSON.stringify("true"),
      BASE_NAME: JSON.stringify("myapp"),
    }),
 
   //create css file from import "mystyle.css" statements
   new ExtractTextPlugin({
    filename: "css/[name].[hash].css",
    disable: false,
    allChunks: true
  }),

   //Copy assets/fonts/images folder/files to dist folder

     new CopyWebpackPlugin([
      {
        from: "src/assets",
        to: "assets"
      },

      // {
      //   from: "src/images",
      //   to: "images"
      // },
      // {
      //   from: "src/favicon.ico",
      //   to: "favicon.ico"
      // }
    ]),
    
    //Create a vendor bundle, that includes all
    //modules imported/require from node_modules folder
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.bundle.[hash].js',
        minChunks:  function(module, count) {
            var context = module.context;
            return context && context.indexOf('node_modules') >= 0;
        },
    }),


     //minimize the bundle file size 
     new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true, // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
          warnings: false,
        },

        sourceMap: true
      }),

      //insert link and script tags inside index.html output file 
      new HtmlWebpackPlugin({
        template: './src/index.html', //input file
        filename: 'index.html', //output file name
        
      })

  ],

  // devServer: {
  //   contentBase: APP_DIR,
  //  // port: 8080,

  //   historyApiFallback: {
  //     index: '/'
  //   }
  // }

};

module.exports = config;