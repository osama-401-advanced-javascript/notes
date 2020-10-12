'use strict';

const minimist = require('minimist');


function Input() {
  const args = minimist(process.argv.slice(2));
  this.command = this.validateCommand(args);
  this.payload = this.validatePayload(args);
  if (this.command == false) {
    console.log('Invalid Command');
  } else if (this.payload == false) {
    console.log('please enter a text');
  } else {
    let results = {
      action: 'add',
      payload: Object.values(args)[1]
    }
    console.log(results);

    return results;
  }




}

Input.prototype.validateCommand = function (args) {
  if (Object.keys(args)[1] == 'add' || Object.keys(args)[1] == 'a') {
    return true;
  }
  else {
    return false
  }
}

Input.prototype.validatePayload = function (args) {
  if (Object.values(args)[1].length) {
    return true
  } else {
    return false;
  }
}

module.exports = Input;