import axios from 'axios'
import setting from '../stores/Setting'
import Nippou from '../models/Nippou'
import PathFormatter from '../presenters/PathFormatter'

export default class NippouLoader {
  constructor () {
    this.loading = false
    this.client = axios.create({
      baseURL: 'https://api.esa.io',
      headers: {
        common: { 'Authorization': `Bearer ${setting.authorizationKey}` }
      }
    })
  }

  load (date) {
    const pathFormatter = new PathFormatter(setting.nippouPath)
    const path = pathFormatter.format(date)

    this.loading = true

    return new Promise((resolve, reject) => {
      this.client.get('/v1/teams/misoca/posts', {
        params: { q: path }
      })
      .then(({data}) => {
        const nippous = data.posts.map(({ name, body_md, url }) =>
          new Nippou({ title: name, article: body_md, url })
        )
        this.loading = false
        resolve(nippous)
      })
    })
  }
}
