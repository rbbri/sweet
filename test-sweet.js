const chalk = require('chalk')

const matchers = (expression) => ({
  toEqual: function(assertion) {
    if (expression !== assertion) {
      console.log(chalk.red("🌚 " + expression + " isn't " + assertion))
      return false
    } else {
      console.log(chalk.green('🍬 as'))
      return true
    }
  },
  toInclude: function(assertion) {
    if (!expression.includes(assertion)) {
      console.log(chalk.red("🌚 " + expression + " does not include " + assertion))
      return false
    } else {
      console.log(chalk.green('🍬 as'))
      return true
    }
  },
  isInstanceOf: function(assertion) {
    if (!(expression instanceof assertion)) {
      console.log(chalk.red("🌚 " + expression + " is not an instance of " + assertion))
      return false
    } else {
      console.log(chalk.green('🍬 as'))
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
  method,
  represent,
  it,
  expect,
  matchers
}
