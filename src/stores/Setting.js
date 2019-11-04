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

  set sectionTitles (titles) {
    this.storage.setItem('sectionTitles', titles)
  }

  get authorizationKey () {
    return this.storage.getItem('authorizationKey')
  }

  get nippouPath () {
    return this.storage.getItem('nippouPath')
  }

  get sectionTitles () {
    return this.storage.getItem('sectionTitles') || ''
  }

  get listSectinTitles () {
    return this.sectionTitles.split('\n')
  }

  isValid () {
    return this.authorizationKey && this.nippouPath
  }
}

export default new Setting()
