import moment from 'moment'

export default class PathFormatter {
  constructor (path) {
    this.path = path
  }

  format (date) {
    return moment(date).format(this.path)
  }
}
