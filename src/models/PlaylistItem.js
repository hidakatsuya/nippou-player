const PENDING = 'pending'
const PLAYING = 'playing'
const PAUSED = 'paused'

export default class PlaylistItem {
  constructor (nippou) {
    this.nippou = nippou
    this.status = PENDING
  }

  nowPlaying () {
    this.status = PLAYING
  }

  nowPaused () {
    this.status = PAUSED
  }

  nowPending () {
    this.status = PENDING
  }

  get playing () {
    return this.status === PLAYING
  }

  get paused () {
    return this.status === PAUSED
  }
}
