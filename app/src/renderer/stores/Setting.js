class Setting {
  constructor () {
    this.storage = window.localStorage
  }

  set authorizationKey (authKey) {
    this.storage.setItem('authorizationKey', authKey)
  }

  set nippouPath (path) {
    this.storage.setItem('nippouPath', path)
  }

  get authorizationKey () {
    return this.storage.getItem('authorizationKey')
  }

  get nippouPath () {
    return this.storage.getItem('nippouPath')
  }

  isValid () {
    return this.authorizationKey && this.nippouPath
  }
}

export default new Setting()
