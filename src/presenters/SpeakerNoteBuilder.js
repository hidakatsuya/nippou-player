import emojiRegex from 'emoji-regex'

export default class SpeakerNoteBuilder {
  static build ({ title, article }, sectionTitles) {
    return (new this(title, article, sectionTitles)).build()
  }

  constructor (title, article, sectionTitles) {
    this.title = title
    this.article = this.initArticle(article)
    this.sectionTitles = sectionTitles
  }

  build () {
    const title = this.removeEmoji(this.title)
    const contents = this.contents.map(content => this.formatArticle(content)).join('\n')

    return `「${title}」\n\n${contents}`
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

  initArticle (article) {
    return article.replace(/<!--[\s\S]*?-->/, '')
  }

  formatArticle (article) {
    const formatters = [
      'formatReadableTitle',
      'removeTagWithContent',
      'replaceImageTag',
      'removeTable',
      'removeArticleLink',
      'removeUrl',
      'removeEmoji',
      'replaceImage',
      'replaceLinkWithText'
    ]
    return formatters.reduce((result, formatter) => this[formatter](result), article)
  }

  formatReadableTitle (article) {
    return article.replace(/^#+? (.+?)$/mg, '\n「$1」\n')
  }

  replaceImage (article) {
    return article.replace(/!\[(.*?)\]\(.*?\)/g, '[Image $1]')
  }

  replaceLinkWithText (article) {
    return article.replace(/(?<!!)\[(.*?)\]\(.*?\)/g, '$1')
  }

  removeTagWithContent (article) {
    return article.replace(/<(.+?)>[\s\S]*<\/\1>/g, '').replace(/<.+?\/>/g, '')
  }

  replaceImageTag (article) {
    return article.replace(/<img[^>]+?>/g, '[Image]')
  }

  removeArticleLink (article) {
    return article.replace(/\[#(\d+): .+\/([^/]+)\]\(.+?\)/g, '')
  }

  removeUrl (article) {
    return article.replace(/(http|https):\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/g, '')
  }

  removeEmoji (article) {
    return article.replace(/:\w+?:/g, '').replace(new RegExp(emojiRegex(), 'g'), '')
  }

  removeTable (article) {
    return article.replace(/^\|.+|$/gm, '')
  }
}
