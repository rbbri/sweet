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
      expect(output).toEqual(true)
    })
  })
})

method('matchers', () => {
  method('toInclude', () => {
    it('should work for arrays', () => {
      output = matchers([1,2,3,4]).toInclude(1)
      expect(output).toEqual(true)
    })
    it('should work for strings', () => {
      output = matchers("I am a string").toInclude("string")
      expect(output).toEqual(true)
    })
  })
})
