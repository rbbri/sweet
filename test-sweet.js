const chalk = require('chalk')
var passedTests = []

const matchers = (expression) => ({
  toEqual: function(assertion) {
    if (expression !== assertion) {
      console.log(chalk.red("🌚 " + expression + " isn't " + assertion))
      passedTests.push('🌚')
      return false
    } else {
      passedTests.push('🍬')
      return true
    }
  },
  toInclude: function(assertion) {
    if (!expression.includes(assertion)) {
      console.log(chalk.red("🌚 " + expression + " does not include " + assertion))
      return false
    } else {
      passedTests.push('🍬')
      return true
    }
  },
  isInstanceOf: function(assertion) {
    if (!(expression instanceof assertion)) {
      console.log(chalk.red("🌚 " + expression + " is not an instance of " + assertion))
      return false
    } else {
      passedTests.push('🍬')
      return true
    }
  }
  })


const expect = (expression) => matchers(expression)

const method = (name, expectations) => {
  console.log(name)
  expectations()
  }

const represent = (name, expectations) => {
  console.log(name)
  expectations()
  }

const it = (can, doThis) => method(chalk.bold(can + '？'), doThis)

module.exports = {
  passedTests,
  method,
  represent,
  it,
  expect,
  matchers
}
