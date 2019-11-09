import PlaylistItem from 'models/PlaylistItem'

describe('PlaylistItem', () => {
  let item = null

  beforeEach(() => {
    item = new PlaylistItem({})
  })

  it('constructor', () => {
    expect(item.status).toBe('pending')
  })

  it('#nowPlaying', () => {
    item.nowPlaying()
    expect(item.status).toBe('playing')
  })

  it('#nowPaused', () => {
    item.nowPaused()
    expect(item.status).toBe('paused')
  })

  it('#playing', () => {
    item.status = 'playing'
    expect(item.playing).toBeTruthy()

    item.status = 'pending'
    expect(item.playing).toBeFalsy()
  })

  it('#paused', () => {
    item.status = 'paused'
    expect(item.paused).toBeTruthy()

    item.status = 'playing'
    expect(item.paused).toBeFalsy()
  })
})
