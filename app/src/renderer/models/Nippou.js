export default class Nippou {
  constructor (attributes) {
    const defaultValues = {
      title: null,
      article: null,
      url: null
    }
    this.attributes = Object.assign(defaultValues, attributes)
  }

  get title () {
    return this.attributes.title
  }

  get article () {
    return this.attributes.article
  }

  get url () {
    return this.attributes.url
  }
}
