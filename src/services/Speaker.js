export default class Speaker {
  constructor (text, synthesis) {
    this.speech = new SpeechSynthesisUtterance(text)
    this.speech.lang = 'ja-JP'
    this.synthesis = synthesis
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
    this.synthesis.speak(this.speech)
  }
}
