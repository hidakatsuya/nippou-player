import moment from 'moment'
import NippouLoader from 'services/NippouLoader'
import Nippou from 'models/Nippou'
import MockAdapter from 'axios-mock-adapter'

describe('NippouLoader', () => {
  const setting = {
    authorizationKey: 'xxx',
    nippouPath: 'in: 日報/YYYY/MM/DD'
  }

  describe('#constructor', () => {
    const loader = new NippouLoader(setting)

    test('#client', () => {
      const { baseURL, headers } = loader.client.defaults
      expect(baseURL).toBe('https://api.esa.io')
      expect(headers.common.Authorization).toBe(`Bearer ${setting.authorizationKey}`)
    })

    test('#loading', () => {
      expect(loader.loading).toBeFalsy()
    })
  })

  test('#load', async () => {
    const loader = new NippouLoader(setting)
    const date = moment('2017-02-25')
    const queryPath = 'in: 日報/2017/02/25'
    const mockClient = new MockAdapter(loader.client, { delayResponse: 300 })

    mockClient
      .onGet('/v1/teams/misoca/posts', { params: { q: queryPath }})
      .reply(200, {
        posts: [
          { number: '123', name: 'fooの日報', body_md: '# 日報', url: 'https://example.com' }
        ]
      })


    expect(loader.state).toBeNull()

    const nippous = await loader.load(date)

    expect(loader.state).toBe('loaded')
    expect(nippous).toEqual([new Nippou({ id: '123', title: 'fooの日報', article: '# 日報', url: 'https://example.com' })])
  })
})
