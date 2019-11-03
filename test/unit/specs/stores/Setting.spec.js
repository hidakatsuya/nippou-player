import setting from 'renderer/stores/Setting'

describe('setting', () => {
  it('constructor', () => {
    expect(setting.storage).to.be.an.instanceof(Storage)
  })

  it('#authorizationKey=', () => {
    setting.authorizationKey = 'abcd'
    expect(window.localStorage.getItem('authorizationKey')).to.equal('abcd')
  })

  it('#nippouPath=', () => {
    setting.nippouPath = '/path/to/nippous'
    expect(window.localStorage.getItem('nippouPath')).to.equal('/path/to/nippous')
  })

  it('#sectionTitles=', () => {
    setting.sectionTitles = '# section1'
    expect(window.localStorage.getItem('sectionTitles')).to.equal('# section1')
  })

  it('#authorizationKey', () => {
    window.localStorage.setItem('authorizationKey', 'xxx')
    expect(setting.authorizationKey).to.equal('xxx')
  })

  it('#nippouPath', () => {
    window.localStorage.setItem('nippouPath', '/path')
    expect(setting.nippouPath).to.equal('/path')
  })

  it('#sectionTitles', () => {
    window.localStorage.setItem('sectionTitles', '# section1\n# section2')
    expect(setting.sectionTitles).to.equal('# section1\n# section2')
  })

  it('#listSectionTitles', () => {
    window.localStorage.setItem('sectionTitles', '# section1\n# section2')
    expect(setting.listSectinTitles).to.eql(['# section1', '# section2'])
  })
})
