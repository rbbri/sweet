#!/usr/bin/env node

const shell = require("shelljs")
const fs = require('fs');
const chalk = require('chalk');
const testFolder = "./spec/"

var runTests = function() { fs.readdirSync(testFolder).forEach(fileName => {
    if (fileName.endsWith("pec.js") || fileName.endsWith("est.js")) {
      shell.exec("node " + testFolder + fileName + " --color=true")
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
  if (fs.existsSync('sweets.txt')) {
    fs.unlinkSync('sweets.txt')
  }
}

try {
  runTests()
  logResults()
} catch(error) {
  if (error.code === 'ENOENT') {
    console.log(chalk.red("🌚 No test files found"))
  }
  else {
    logResults()
  }
}
