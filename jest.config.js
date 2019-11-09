module.exports = {
  moduleFileExtensions: [
    'js',
    'vue'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest'
  },
  transformIgnorePatterns: [
    'node_modules/'
  ],
  modulePaths: [
    '<rootDir>/src',
    '<rootDir>/src/components',
    '<rootDir>/node_modules'
  ]
}
