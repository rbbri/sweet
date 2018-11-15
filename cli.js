#!/usr/bin/env node

const shell = require("shelljs")
const fs = require('fs');
const chalk = require('chalk');
const testFolder = "./spec/"

var runTests = function() { fs.readdirSync(testFolder).forEach(file => {
    if (file.includes("_spec") || file.includes("_test")) {
      shell.exec("node " + testFolder + file + " --color=true")
    }
  })
}

var logResults = function() {
  var sweetieBar = fs.readFileSync('sweets.txt', 'utf8')
  sweetieBarArray = sweetieBar.split(' ')
  var passed = 0
  var failed = 0
  for(i = 0; i < sweetieBarArray.length; i++) {
    if(sweetieBarArray[i] === '🍬'){
      passed++;
    } else if (sweetieBarArray[i] === '🌚'){
      failed++;
    }
  }
  console.log(sweetieBar)
  console.log(chalk.green(passed + " tests passed."))
  console.log(chalk.red(failed + " tests failed."))
  fs.unlinkSync('sweets.txt')
}

try {
  runTests()
} catch(error) {
  console.log(chalk.yellow("Failed to run tests"))
  console.trace(chalk.red(error))
}

try {
  logResults()
} catch(error) {
  if (fs.existsSync('sweets.txt')) {
    fs.unlinkSync('sweets.txt')
  }
  console.log(chalk.yellow("Failed to log results"))
  console.trace(chalk.red(error))
}
