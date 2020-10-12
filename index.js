#!/usr/bin/env node
'use strict';
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const arg = new Input();

// console.log(options);
new Notes(arg)
