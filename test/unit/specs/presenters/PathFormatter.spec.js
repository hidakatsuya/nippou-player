import PathFormatter from 'src/presenters/PathFormatter'

describe('PathFormatter', () => {
  const formatter = new PathFormatter('in:日報/YYYY/MM/DD')

  it('#format', () => {
    const d = new Date(2017, 2 - 1, 24)
    expect(formatter.format(d)).to.equal('in:日報/2017/02/24')
  })
})
