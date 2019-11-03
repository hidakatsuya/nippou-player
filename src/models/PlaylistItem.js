export default class PlaylistItem {
  static PENDING = 'pending'
  static PLAYING = 'playing'
  static PAUSED = 'paused'

  constructor (nippou) {
    this.nippou = nippou
    this.nowPending()
  }

  nowPlaying () {
    this.status = this.constructor.PLAYING
  }

  nowPaused () {
    this.status = this.constructor.PAUSED
  }

  nowPending () {
    this.status = this.constructor.PENDING
  }

  get playing () {
    return this.status === this.constructor.PLAYING
  }

  get paused () {
    return this.status === this.constructor.PAUSED
  }
}
