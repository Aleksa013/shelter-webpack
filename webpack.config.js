const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: 'assets/[name][ext]',
  },
  mode: 'development',
  resolve:{
    extensions: ['.js', '.json'],
  },
  module:{
    rules:[
      {
      test:/\.html$/,
      use:[
        {
          loader:'html-loader',
          options: {minimize: false},
      },
    ]
    },{
      test:/\.s[ac]ss$/i,
      use:[
        "style-loader",
        "css-loader",
        "sass-loader",
      {
        loader:'sass-resources-loader',
        options: {
          resources:[
            'src/styles/vars.scss'
          ]
      }
      },
      ]
    },
    {
        test:/\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type:'asset/resource',
        
    },
    {
        test:/\.(woff(2)?|eot|ttf|otf)$/i,
        type:'asset/resource',
    }
  ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }), 
  ],
    devServer: {
      compress: true,
      port: 9000,
    },
};