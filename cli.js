#!/usr/bin/env node

const shell = require("shelljs")
const fs = require('fs');
const testFolders = ["./spec/", "./test/"]


for(i = 0; i < testFolders.length; i++) {
  fs.readdirSync(testFolders[i]).forEach(file => {
    if (file.includes("_spec") || file.includes("_test")) {
      shell.exec("node " + testFolders[i] + file + " --color=true")
    }
  })
}
