'use strict';

const minimist = require('minimist');


class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.action = this.validateCommand(Object.keys(args)[1]);
    this.payload = this.validatePayload(Object.values(args)[1]);
    console.log(this.action, this.payload);
    // if (this.command == false) {
    //   console.log('Invalid Command');
    // } else if (this.payload == false) {
    //   console.log('please enter a text');
    // } else {
    //   let results = {
    //     action: 'add',
    //     payload: Object.values(args)[1]
    //   }
    //   console.log(results);

    //   return results;
    // }
  }


  validateCommand(args) {
    // console.log(args);
    if (args == 'add' || args == 'a') {
      return args;
    }
    else {
      return ''
    }
  }

  validatePayload(args) {
    if (args !== undefined && args !== '') {
      return args
    } else {
      return '';
    }
  }

}





module.exports = Input;