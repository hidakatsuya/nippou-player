const emojiRegex = require('emoji-regex')

export default class SpeakerNoteBuilder {
  static build ({ title, article }, sectionTitles) {
    return (new this(title, article, sectionTitles)).build()
  }

  constructor (title, article, sectionTitles) {
    this.title = title
    this.article = article
    this.sectionTitles = sectionTitles
  }

  build () {
    const contents = this.contents.map(content => this.formatArticle(content)).join('\n')
    return `「${this.title}」\n\n${contents}`
  }

  get contents () {
    if (this.sectionTitles.length > 0) {
      const reTitles = new RegExp(this.sectionTitles.map(t => `^${t}`).join('|'))
      return this.sectionContents.filter(content => reTitles.test(content))
    } else {
      return this.sectionContents
    }
  }

  get sectionContents () {
    return this.article.split(/\n(?=#+? [^#])/)
  }

  formatArticle (article) {
    const formatters = [
      'replaceLinkWithText',
      'removeArticleLink',
      'removeUrl',
      'removeEmoji'
    ]
    return formatters.reduce((result, formatter) => this[formatter](result), article)
  }

  formatReadableTitle (article) {
    return article.replace(/#+? (.+?)(?=\n)/g, '\n「$1」\n')
  }

  replaceLinkWithText (article) {
    return article.replace(/\[(.*?)\]\(.*?\)/g, '$1')
  }

  removeArticleLink (article) {
    return article.replace(/\[#(\d+): .+\/([^/]+)\]\(.+?\)/g, '')
  }

  removeUrl (article) {
    return article.replace(/(http|https):\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/, '')
  }

  removeEmoji (article) {
    return article.replace(/:\w+?:/g, '').replace(new RegExp(emojiRegex(), 'g'), '')
  }

  removeTable (article) {
    return article.replace(/^\|.+|$/gm, '')
  }
}
