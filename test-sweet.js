const chalk = require('chalk')
const fs = require('fs')



exports: matchers = (expression) => ({
  toEqual: function(assertion) {
    if (expression !== assertion) {
      console.trace(
        chalk.red("🌚 " + expression + " isn't " + assertion)
      )
      return fail()
    } else {
      return pass()
    }
  },
  toInclude: function(assertion) {
    if (!expression.includes(assertion)) {
      console.trace(
        chalk.red("🌚 " + expression + " does not include " + assertion)
      )
      return fail()
    } else {
      return pass()
    }
  },
  isInstanceOf: function(assertion) {
    if (!(expression instanceof assertion)) {
      console.trace(
        chalk.red("🌚 " + expression + " is not an instance of " + assertion)
      )
      return fail()
    } else {
      return pass()
    }
  }
  })

const fail = function() {
  sweetieBar('🌚')
  return false
}

const pass = function() {
  sweetieBar('🍬')
  return true
}

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
