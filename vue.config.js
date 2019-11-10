const path = require('path')

module.exports = {
  pwa: {
    name: 'Nippou Player',
    themeColor: '#0a9b94'
  },
  configureWebpack: {
    resolve: {
      modules: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'src/components')
      ]
    }
  }
}
