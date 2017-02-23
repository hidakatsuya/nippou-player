export default class SpeakerNoteBuilder {
  static build ({ title, article }) {
    return (new this(title, article)).build()
  }

  constructor (title, article) {
    this.title = title
    this.article = article
  }

  build () {
    return `# [${this.title}]。\n\n${this.formatArticle()}`
  }

  formatArticle () {
    let article = this.article

    article = this.formatEsaSyntax(article)
    article = this.formatMarkdownSyntax(article)
    article = this.formatBasic(article)

    return article
  }

  formatBasic (article) {
    return article.replace(/https?:[^\s]+/g, '')
  }

  formatMarkdownSyntax (article) {
    return article.replace(/(\[.+?\])\(.+?\)/g, '$1')
  }

  formatEsaSyntax (article) {
    return article
      .replace(/\[#(\d+): .+\/([^\/]+)\]\(.+?\)/g, '[Post#$1:$2]')
  }
}
