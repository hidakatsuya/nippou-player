import PlaylistItem from 'models/PlaylistItem'

describe('PlaylistItem', () => {
  let item = null

  beforeEach(() => {
    item = new PlaylistItem({})
  })

  test('constructor', () => {
    expect(item.status).toBe('pending')
  })

  test('#nowPlaying', () => {
    item.nowPlaying()
    expect(item.status).toBe('playing')
  })

  test('#nowPaused', () => {
    item.nowPaused()
    expect(item.status).toBe('paused')
  })

  test('#playing', () => {
    item.status = 'playing'
    expect(item.playing).toBeTruthy()

    item.status = 'pending'
    expect(item.playing).toBeFalsy()
  })

  test('#paused', () => {
    item.status = 'paused'
    expect(item.paused).toBeTruthy()

    item.status = 'playing'
    expect(item.paused).toBeFalsy()
  })
})
