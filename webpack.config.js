module.exports = {
  entry: {
    app: ['./main.js']
  },
  output: {
    filename: 'bundle.js'
  },
  progress: true,
  colors: true,
  inline: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
  devtool: 'source-map'
};