#!/usr/bin/env node
'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');
// const Recored = require('./models/notes-schema.js');

const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/note';
mongoose
    .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .catch((err) => {
        console.log('NOOOOOOOOOOOOOOOOOOOOOOOOOOO', err.message);
    });

const arg = new Input();

const note = new Notes(arg)

note.execute(arg)

// mongoose.disconnect();
