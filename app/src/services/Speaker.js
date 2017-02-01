export default class Speaker {
  static init () {
    let speaker = new this('a')
    speaker.speak()
    window.speechSynthesis.cancel()
  }

  constructor (text) {
    this.speech = new SpeechSynthesisUtterance(text)
    this.speech.lang = 'ja-JP'
  }

  set onStart (handler) {
    this.speech.onstart = handler
  }

  set onResume (handler) {
    this.speech.onresume = handler
  }

  set onEnd (handler) {
    this.speech.onend = handler
  }

  set onPause (handler) {
    this.speech.onpause = handler
  }

  speak () {
    window.speechSynthesis.speak(this.speech)
  }
}
