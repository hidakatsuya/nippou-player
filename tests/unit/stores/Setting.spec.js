import setting from 'stores/Setting'

describe('setting', () => {
  test('constructor', () => {
    expect(setting.storage).toBeInstanceOf(Storage)
  })

  test('#authorizationKey=', () => {
    setting.authorizationKey = 'abcd'
    expect(window.localStorage.getItem('authorizationKey')).toBe('abcd')
  })

  test('#nippouPath=', () => {
    setting.nippouPath = '/path/to/nippous'
    expect(window.localStorage.getItem('nippouPath')).toBe('/path/to/nippous')
  })

  test('#sectionTitles=', () => {
    setting.sectionTitles = '# section1'
    expect(window.localStorage.getItem('sectionTitles')).toBe('# section1')
  })

  test('#authorizationKey', () => {
    window.localStorage.setItem('authorizationKey', 'xxx')
    expect(setting.authorizationKey).toBe('xxx')
  })

  test('#nippouPath', () => {
    window.localStorage.setItem('nippouPath', '/path')
    expect(setting.nippouPath).toBe('/path')
  })

  test('#sectionTitles', () => {
    window.localStorage.setItem('sectionTitles', '# section1\n# section2')
    expect(setting.sectionTitles).toBe('# section1\n# section2')
  })

  test('#listSectionTitles', () => {
    window.localStorage.setItem('sectionTitles', '# section1\n# section2')
    expect(setting.listSectinTitles).toEqual(['# section1', '# section2'])
  })
})
