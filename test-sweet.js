const chalk = require('chalk')
const fs = require('fs')



exports: matchers = (expression) => ({
  toEqual: function(assertion) {
    if (expression !== assertion) {
      console.log(chalk.red("🌚 " + expression + " isn't " + assertion))
      sweetieBar('🌚')
      return false
    } else {
      sweetieBar('🍬')
      return true
    }
  },
  toInclude: function(assertion) {
    if (!expression.includes(assertion)) {
      console.log(chalk.red("🌚 " + expression + " does not include " + assertion))
      sweetieBar('🌚')
      return false
    } else {
      sweetieBar('🍬')
      return true
    }
  },
  isInstanceOf: function(assertion) {
    if (!(expression instanceof assertion)) {
      console.log(chalk.red("🌚 " + expression + " is not an instance of " + assertion))
      sweetieBar('🌚')
      return false
    } else {
      sweetieBar('🍬')
      return true
    }
  }
  })

var sweetieBar = function(result) {
  fs.appendFile('./sweets.txt', result + ' ', function(){})
}

exports: expect = (expression) => matchers(expression)

exports: method = (name, expectations) => {
  console.log(name)
  expectations()
  }

exports: represent = (name, expectations) => {
  console.log(name)
  expectations()
  }

exports: it = (can, doThis) => method(chalk.bold(can + '？'), doThis)
