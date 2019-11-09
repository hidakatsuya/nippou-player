import Nippou from 'models/Nippou'

describe('Nippou', () => {
  const nippou = new Nippou({
    title: 'Nippou',
    article: '# Title',
    url: 'https://example.com'
  })

  it('#title', () => {
    expect(nippou.title).toBe('Nippou')
  })

  it('#article', () => {
    expect(nippou.article).toBe('# Title')
  })

  it('#url', () => {
    expect(nippou.url).toBe('https://example.com')
  })
})
