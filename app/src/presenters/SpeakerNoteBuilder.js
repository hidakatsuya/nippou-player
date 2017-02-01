export default class SpeakerNoteBuilder {
  static build (nippou) {
    return (new this(nippou)).build()
  }

  constructor (nippou) {
    this.nippou = nippou
  }

  build () {
    return `# [${this.nippou.title}]。\n\n${this.formatArticle()}`
  }

  formatArticle () {
    let article = this.nippou.article

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
