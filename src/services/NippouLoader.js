import axios from 'axios'
import Nippou from 'models/Nippou'
import PathFormatter from 'presenters/PathFormatter'

export default class NippouLoader {
  constructor ({ authorizationKey, nippouPath }) {
    this.nippouPath = nippouPath
    this.state = null

    this.client = axios.create({
      baseURL: 'https://api.esa.io',
      headers: {
        common: { 'Authorization': `Bearer ${authorizationKey}` }
      }
    })
  }

  async load (date) {
    const pathFormatter = new PathFormatter(this.nippouPath)
    const path = pathFormatter.format(date)

    try {
      this.state = 'loading'

      const response = await this.client.get('/v1/teams/misoca/posts', { params: { q: path } })
      const nippous = response.data.posts.map(({ number, name, body_md, url }) => {
        return new Nippou({ id: number, title: name, article: body_md, url })
      })

      this.state = 'loaded'

      return nippous
    } catch (error) {
      this.error_message = error.message
      this.state = 'error'
      return []
    }
  }
}
