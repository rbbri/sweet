#!/usr/bin/env node

const shell = require("shelljs")
const fs = require('fs');
const chalk = require('chalk');
const testFolder = "./spec/"

  fs.readdirSync(testFolder).forEach(file => {
    if (file.includes("_spec") || file.includes("_test")) {
      shell.exec("node " + testFolder + file + " --color=true")
    }
  })

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
console.log(chalk.green(passed + " passed."))
console.log(chalk.red(failed + " failed."))
fs.unlinkSync('sweets.txt')
