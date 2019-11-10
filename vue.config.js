const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/nippou-player/' : '',
  pwa: {
    name: 'Nippou Player',
    themeColor: '#000000',
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/mstile-150x150.png'
    }
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
