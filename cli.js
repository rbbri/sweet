#!/usr/bin/env node

var shell = require("shelljs")

shell.exec("node spec/*_spec.js")
