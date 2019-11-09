import setting from 'stores/Setting'

describe('setting', () => {
  it('constructor', () => {
    expect(setting.storage).toBeInstanceOf(Storage)
  })

  it('#authorizationKey=', () => {
    setting.authorizationKey = 'abcd'
    expect(window.localStorage.getItem('authorizationKey')).toBe('abcd')
  })

  it('#nippouPath=', () => {
    setting.nippouPath = '/path/to/nippous'
    expect(window.localStorage.getItem('nippouPath')).toBe('/path/to/nippous')
  })

  it('#sectionTitles=', () => {
    setting.sectionTitles = '# section1'
    expect(window.localStorage.getItem('sectionTitles')).toBe('# section1')
  })

  it('#authorizationKey', () => {
    window.localStorage.setItem('authorizationKey', 'xxx')
    expect(setting.authorizationKey).toBe('xxx')
  })

  it('#nippouPath', () => {
    window.localStorage.setItem('nippouPath', '/path')
    expect(setting.nippouPath).toBe('/path')
  })

  it('#sectionTitles', () => {
    window.localStorage.setItem('sectionTitles', '# section1\n# section2')
    expect(setting.sectionTitles).toBe('# section1\n# section2')
  })

  it('#listSectionTitles', () => {
    window.localStorage.setItem('sectionTitles', '# section1\n# section2')
    expect(setting.listSectinTitles).toEqual(['# section1', '# section2'])
  })
})
