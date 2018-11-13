const {
  method,
  it,
  expect,
  matchers
} = require('../test-sweet')

let executes = 0
const noop = () => { executes += 1 }

method('method', () => {
  it('executes a callback function', () => {
    const output= method('', noop)
    expect(executes).toEqual(1)
  })
})

method('expect', () => {
  it('returns an object', () => {
    const output= expect(true)
    expect(typeof output).toEqual("object")
    expect(typeof output.toEqual).toEqual("function")
  })
})

method('matchers', () => {
  method('toEqual', () => {
    it('should be true when true', () => {
      output = matchers(1).toEqual(1)
      console.log(output)
      expect(output).toEqual(true)
    })
  })
})
