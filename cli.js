#!/usr/bin/env node

const shell = require("shelljs")

shell.exec("node spec/*_spec.js --color=true")
