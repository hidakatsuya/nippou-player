const settings = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ]
  ]
}

module.exports = {
  env: {
    test: settings
  }
}
