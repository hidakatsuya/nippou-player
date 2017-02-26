import PlaylistItem from 'renderer/models/PlaylistItem'

describe('PlaylistItem', () => {
  let item = null

  beforeEach(() => {
    item = new PlaylistItem({})
  })

  it('constructor', () => {
    expect(item.status).to.equal(PlaylistItem.PENDING)
  })

  it('#nowPlaying', () => {
    item.nowPlaying()
    expect(item.status).to.equal(PlaylistItem.PLAYING)
  })

  it('#nowPaused', () => {
    item.nowPaused()
    expect(item.status).to.equal(PlaylistItem.PAUSED)
  })

  it('#playing', () => {
    item.status = PlaylistItem.PLAYING
    expect(item.playing).to.be.true

    item.status = PlaylistItem.PENDING
    expect(item.playing).to.be.false
  })

  it('#paused', () => {
    item.status = PlaylistItem.PAUSED
    expect(item.paused).to.be.true

    item.status = PlaylistItem.PLAYING
    expect(item.paused).to.be.false
  })
})
