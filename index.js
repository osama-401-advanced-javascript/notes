#!/usr/bin/env node
'use strict';
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');
const notes = require('./lib/notes.js');

const options = new Input();
// console.log(options);
new Notes(options)