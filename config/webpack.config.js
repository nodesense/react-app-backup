var webpack = require('webpack');
var path = require('path');


// ../ works as well
var APP_DIR = path.resolve(__dirname, '../src');


//generate script and link tags dynamically with hash code
var HtmlWebpackPlugin = require('html-webpack-plugin');

//generate script and link tags dynamically with hash code
var HtmlWebpackPlugin = require('html-webpack-plugin');

//Useful for extracting import "mystyle.css" used within js code
//used along with css-loaders
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var config = {
  
  entry: {
    app: APP_DIR + '/main.js',
  }, 

  //no need for path attribute in output
  //all bundle files created in memory in webpack
  output: {
    publicPath: '/',
    filename: "app.bundle.js"
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
    config: JSON.stringify(require(path.join(__dirname,  "development.json")))
  },
 
  
  //debug, es6 to es5 mapping
  devtool: 'source-map',

  plugins: [

    new webpack.DefinePlugin ({
      VERSION: JSON.stringify("1.0.0"),
      PRODUCTION: JSON.stringify("false"),
      BASE_NAME: JSON.stringify(""),
    }),




   //create css file from import "mystyle.css" statements
   new ExtractTextPlugin({
    filename: "[name].css",
    disable: false,
    allChunks: true
  }),

    
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
      minChunks:  function(module, count) {
          var context = module.context;
          return context && context.indexOf('node_modules') >= 0;
      },
  }),


  //insert link and script tags inside index.html output file 
  new HtmlWebpackPlugin({
    template: './src/index.html', //input file
    filename: 'index.html', //output file name
  })

  ],

  devServer: {
    contentBase: APP_DIR,
    //port: 8080,

    historyApiFallback: {
      index: '/'
    }
  }

};

module.exports = config;