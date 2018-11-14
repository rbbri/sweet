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
      console.log(chalk.red("🌚 " + assertion + " does not include " + expression))
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

const it = (can, doThis) => method(chalk.bold(can + '？'), doThis)

module.exports = {
  method,
  it,
  expect,
  matchers
}
