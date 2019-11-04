import axios from 'axios'
import Nippou from '../models/Nippou'
import PathFormatter from '../presenters/PathFormatter'

export default class NippouLoader {
  constructor ({ authorizationKey, nippouPath }) {
    this.nippouPath = nippouPath
    this.loading = false
    this.client = axios.create({
      baseURL: 'https://api.esa.io',
      headers: {
        common: { 'Authorization': `Bearer ${authorizationKey}` }
      }
    })
  }

  load (date) {
    const pathFormatter = new PathFormatter(this.nippouPath)
    const path = pathFormatter.format(date)

    this.loading = true

    return new Promise(resolve => {
      this.client.get('/v1/teams/misoca/posts', {
        params: { q: path }
      })
      .then(({data}) => {
        const nippous = data.posts.map(({ number, name, body_md, url }) =>
          new Nippou({ id: number, title: name, article: body_md, url })
        )
        this.loading = false
        resolve(nippous)
      })
    })
  }
}
