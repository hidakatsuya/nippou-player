import Nippou from 'src/models/Nippou'

describe('Nippou', () => {
  const nippou = new Nippou({
    title: 'Nippou',
    article: '# Title',
    url: 'https://example.com'
  })

  it('#title', () => {
    expect(nippou.title).to.equal('Nippou')
  })

  it('#article', () => {
    expect(nippou.article).to.equal('# Title')
  })

  it('#url', () => {
    expect(nippou.url).to.equal('https://example.com')
  })
})
