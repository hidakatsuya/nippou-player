const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      modules: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'src/components')
      ]
    }
  }
}
