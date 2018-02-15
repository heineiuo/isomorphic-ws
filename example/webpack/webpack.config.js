const path = require('path')

module.exports = {
  context: __dirname,
  entry: {
    app: [
      path.join(__dirname, './app.js')
    ]
  },
  // compile to browser platform
  target: 'web',
  output: {
    path: __dirname,
    filename: '[name].output.js',
  }
}