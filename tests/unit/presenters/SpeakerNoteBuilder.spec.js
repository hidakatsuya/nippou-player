import SpeakerNoteBuilder from 'presenters/SpeakerNoteBuilder'

describe('SpeakerNoteBuilder', () => {
  describe('Building note', () => {
    const builder = new SpeakerNoteBuilder('title', 'content', [])

    it('#build', () => {
      expect(builder.build()).toBe('「title」\n\ncontent')
    })
  })

  describe('Filtering article contents', () => {
    const article =
`# section1
content for section1
## section1.1
content for section1.1
### section1.1.1
content for section1.1.1
## section1.2
content for section1.2
# section2
content for section2`

    it('#sectionContents', () => {
      const builder = new SpeakerNoteBuilder('title', article, [])
      expect(builder.sectionContents).toEqual([
        '# section1\ncontent for section1',
        '## section1.1\ncontent for section1.1',
        '### section1.1.1\ncontent for section1.1.1',
        '## section1.2\ncontent for section1.2',
        '# section2\ncontent for section2'
      ])
    })

    it('#contents', () => {
      const builder = new SpeakerNoteBuilder('title', article, ['## section1.1', '# section2'])
      expect(builder.contents).toEqual([
        '## section1.1\ncontent for section1.1',
        '# section2\ncontent for section2'
      ])
    })
  })

  describe('Formatting', () => {
    const builder = new SpeakerNoteBuilder('title', '# section\n\n[aaa](https://www.example.com)', [])

    it('#formatArticle', () => {
      const article = '# section\n\n[aaa](https://www.example.com)'
      expect(builder.formatArticle(article)).toBe('# section\n\naaa')
    })

    it('#formatReadableTitle', () => {
      const article = '# section1\nsection1 content\n\n## section2\nsection2 content'
      expect(builder.formatReadableTitle(article)).toBe('\n「section1」\n\nsection1 content\n\n\n「section2」\n\nsection2 content')
    })

    it('#removeArticleLink', () => {
      const article = '# section\n\n[#1234: path/to/Title](/posts/1234)\n[#1234: path/to/Title](/posts/1234)'
      expect(builder.removeArticleLink(article)).toBe('# section\n\n\n')
    })

    it('#removeUrl', () => {
      const article = '# section\n\nhttps://www.example.com/foo/bar text'
      expect(builder.removeUrl(article)).toBe('# section\n\n text')
    })

    it('#replaceLinkWithText', () => {
      const article = '# section\n\n[label1](/path/to/article) [label2](http://www.example.com/) text'
      expect(builder.replaceLinkWithText(article)).toBe('# section\n\nlabel1 label2 text')
    })

    it('#removeEmoji', () => {
      const article = 'Sushi🍣:sushi:HeartEyes😍:heart_eyes:'
      expect(builder.removeEmoji(article)).toBe('SushiHeartEyes')
    })

    it('#removeTable', () => {
      const article = '| caption1 | caption2 |\n| --- | --- |\n| content1 | content2 |\n'
      expect(builder.removeTable(article)).toBe('\n\n\n')
    })
  })
})
