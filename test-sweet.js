var chalk = require('chalk')

const matchers = (expression) => ({
  toEqual: function(assertion) {
    if (expression !== assertion) {
      console.log(chalk.red("🌚 " + expression + " isn't " + assertion))
  } else {
      console.log(chalk.green('🍬 as'))
  }
  }
  })

const expect = (expression) => matchers(expression)

const describe = (description, expectations) => {
  console.log(description)
  expectations()
  }

const it = (can, doThis) => describe(chalk.bold(can + '？'), doThis)

module.exports = {
  describe,
  it,
  expect,
  matchers
}
