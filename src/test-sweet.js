const chalk = require('chalk')
const fs = require('fs')
const glob = require('glob')

SweetSuite = function () {

  const fail = function(expression, assertion) {
    sweetieBar('🌚')
    console.log(chalk.red('In: ' + __filename))
    return false
  }

  const pass = function() {
    sweetieBar('🍬')
    return true
  }

  var sweetieBar = function(result) {
    fs.appendFile('./bin/sweets.txt', result + ' ', function(){})
  }

  var testLog = function(test) {
    let test_data = JSON.stringify(test, null, 2);
    fs.appendFileSync('./bin/wrappers.json', test_data)
  }

  exports: mock = (object) => ({
    with: function(call) {
      return call
    }
  })

exports: stub = (object) => mock(object)

exports: matchers = (expression) => ({
  toEqual: function(assertion) {
    if (expression !== assertion) {
      console.trace(
        chalk.red("🌚 " + expression + " isn't " + assertion)
      )
      return fail(expression, assertion)
    } else {
      return pass()
    }
  },
  toInclude: function(assertion) {
    if (!expression.includes(assertion)) {
      console.trace(
        chalk.red("🌚 " + expression + " does not include " + assertion)
      )
      return fail(expression, assertion)
    } else {
      return pass()
    }
  },
  isInstanceOf: function(assertion) {
    if (!(expression instanceof assertion)) {
      console.trace(
        chalk.red("🌚 " + expression + " is not an instance of " + assertion)
      )
      return fail(expression, assertion)
    } else {
      return pass()
    }
  }
  })

exports: expect = (expression) => matchers(expression)

exports: allow = (expression) => matchers(expression)

exports: method = (name, expectations) => {
  expectations()
  }

exports: represent = (name, expectations) => method(
  chalk.bold(name), expectations
)
exports: describe = (name, expectations) => method(
  chalk.bold(name), expectations
)

exports: it = (can, doThis) => {
  testLog(can, doThis)
  doThis()
}

}
new SweetSuite()
