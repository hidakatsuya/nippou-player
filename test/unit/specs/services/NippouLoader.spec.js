import moment from 'moment'
import NippouLoader from 'src/services/NippouLoader'
import MockAdapter from 'axios-mock-adapter'

describe('NippouLoader', () => {
  const setting = {
    authorizationKey: 'xxx',
    nippouPath: 'in: 日報/YYYY/MM/DD'
  }

  describe('#constructor', () => {
    const loader = new NippouLoader(setting)

    it('#client', () => {
      const { baseURL, headers } = loader.client.defaults
      expect(baseURL).to.equal('https://api.esa.io')
      expect(headers.common.Authorization).to.equal(`Bearer ${setting.authorizationKey}`)
    })

    it('#loading', () => {
      expect(loader.loading).to.be.false
    })
  })

  it('#load', () => {
    const loader = new NippouLoader(setting)
    const date = moment('2017-02-25')
    const queryPath = 'in: 日報/2017/02/25'
    const mockClient = new MockAdapter(loader.client, { delayResponse: 300 })

    mockClient
      .onGet('/v1/teams/misoca/posts', {params: { q: queryPath }})
      .reply(200, {
        data: {
          posts: [
            { name: 'fooの日報', body_md: '# 日報', url: 'https://example.com' }
          ]
        }
      })

    loader.load(date).then(nippous => {
      expect(nippous).to.be.a('array').with.have.lengthOf(1)
      expect(loader.loading).to.be.false
    })
    // #loading should be set true during processing.
    expect(loader.loading).to.be.true
  })
})
