import SpeakerNoteBuilder from 'presenters/SpeakerNoteBuilder'

describe('SpeakerNoteBuilder', () => {
  describe('Initializing', () => {
    const builder = new SpeakerNoteBuilder('title', 'content1 <!-- comment --> content2', [])

    test('article', () => {
      expect(builder.article).toBe('content1  content2')
    })
  })

  describe('Building note', () => {
    const builder = new SpeakerNoteBuilder('title', 'content', [])

    test('#build', () => {
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

    test('#sectionContents', () => {
      const builder = new SpeakerNoteBuilder('title', article, [])
      expect(builder.sectionContents).toEqual([
        '# section1\ncontent for section1',
        '## section1.1\ncontent for section1.1',
        '### section1.1.1\ncontent for section1.1.1',
        '## section1.2\ncontent for section1.2',
        '# section2\ncontent for section2'
      ])
    })

    test('#contents', () => {
      const builder = new SpeakerNoteBuilder('title', article, ['## section1.1', '# section2'])
      expect(builder.contents).toEqual([
        '## section1.1\ncontent for section1.1',
        '# section2\ncontent for section2'
      ])
    })
  })

  describe('Formatting', () => {
    const builder = new SpeakerNoteBuilder('title', '# section\n\n[aaa](https://www.example.com)', [])

    test('#formatArticle', () => {
      const article = '# section\n\n[aaa](https://www.example.com)'
      expect(builder.formatArticle(article)).toBe('\n「section」\n\n\naaa')
    })

    test('#formatReadableTitle', () => {
      const article = '# section1\nsection1 content\n\n## section2\nsection2 content'
      expect(builder.formatReadableTitle(article)).toBe('\n「section1」\n\nsection1 content\n\n\n「section2」\n\nsection2 content')
    })

    test('#removeArticleLink', () => {
      const article = '# section\n\n[#1234: path/to/Title](/posts/1234)\n[#1234: path/to/Title](/posts/1234)'
      expect(builder.removeArticleLink(article)).toBe('# section\n\n\n')
    })

    test('#removeUrl', () => {
      const url = 'https://www.example.com/foo/bar'
      const article = `# section\n\n${url} text ${url}`
      expect(builder.removeUrl(article)).toBe('# section\n\n text ')
    })

    test('#replaceLinkWithText', () => {
      const article = '# section\n\n[label1](/path/to/article) [label2](http://www.example.com/) text'
      expect(builder.replaceLinkWithText(article)).toBe('# section\n\nlabel1 label2 text')
    })

    test('#removeEmoji', () => {
      const article = 'Sushi🍣:sushi:HeartEyes😍:heart_eyes:'
      expect(builder.removeEmoji(article)).toBe('SushiHeartEyes')
    })

    test('#removeTable', () => {
      const article = '| caption1 | caption2 |\n| --- | --- |\n| content1 | content2 |\n'
      expect(builder.removeTable(article)).toBe('\n\n\n')
    })

    test('#removeCode', () => {
      const article = '# section1\n```\ncode;code;\n```\n# section2'
      expect(builder.removeCode(article)).toBe('# section1\n\n# section2')
    })

    test('#removeTagWithContent', () => {
      const article = '# Section1\n<Details><Summary>Summary</Summary>\nDetailsDetailsDetails\n</Details>\n## Section2'
      expect(builder.removeTagWithContent(article)).toBe('# Section1\n\n## Section2')
    })

    test('#replaceImage', () => {
      const article = '![Image1](https://example.com/image1.png)\n![Image2](https://example.com/image2.png)'
      expect(builder.replaceImage(article)).toBe('[Image Image1]\n[Image Image2]')
    })

    test('#replaceImageTag', () => {
      const imageTag = '<img width="120" alt="screenshot.png" src="https://misoca-esa-io-custom-bucket.s3-ap-northeast-1.amazonaws.com/uploads/production/attachments/xxx.png">'
      const article = `# Section\n${imageTag}\nImageImage\n${imageTag}`
      expect(builder.replaceImageTag(article)).toBe('# Section\n[Image]\nImageImage\n[Image]')
    })
  })
})
