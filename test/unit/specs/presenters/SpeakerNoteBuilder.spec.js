import SpeakerNoteBuilder from 'src/presenters/SpeakerNoteBuilder'

describe('SpeakerNoteBuilder', () => {
  const builder = new SpeakerNoteBuilder('title', '[aaa](https://www.example.com)')

  it('#build', () => {
    expect(builder.build()).to.equal('# [title]。\n\n[aaa]')
  })

  it('#formatArticle', () => {
    expect(builder.formatArticle()).to.equal('[aaa]')
  })

  it('#formatBasic', () => {
    expect(builder.formatBasic('aa https://www.example.com bb')).to.equal('aa  bb')
    expect(builder.formatBasic('あ http://www.example.com あ')).to.equal('あ  あ')
  })

  it('#formatMarkdownSyntax', () => {
    const article = '[Caption](http://www.example.com)'
    expect(builder.formatMarkdownSyntax(article)).to.equal('[Caption]')
  })

  it('#formatEsaSyntax', () => {
    const article = '[#1234: path/to/Title](/posts/1234)'
    expect(builder.formatEsaSyntax(article)).to.equal('[Post#1234:Title]')
  })
})
