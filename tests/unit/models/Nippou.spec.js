import Nippou from 'models/Nippou'

describe('Nippou', () => {
  const nippou = new Nippou({
    title: 'Nippou',
    article: '# Title',
    url: 'https://example.com'
  })

  test('#title', () => {
    expect(nippou.title).toBe('Nippou')
  })

  test('#article', () => {
    expect(nippou.article).toBe('# Title')
  })

  test('#url', () => {
    expect(nippou.url).toBe('https://example.com')
  })
})
