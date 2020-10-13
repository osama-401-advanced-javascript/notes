'use strict';

const minimist = require('minimist');


class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.action = this.validateCommand(Object.keys(args)[1]);
    this.payload = this.validatePayload(Object.values(args)[1]);
    this.category = this.validateCategory(Object.keys(args)[2] ? Object.keys(args)[2] : null)
    this.categoryName = this.categoryNameFunction(Object.values(args)[2]);
    // console.log(this.action, this.payload);
    if (this.action == false) {
      console.log('invalid command');
    } else if (this.payload == false) {
      console.log('no text has been enterd');
    } else {
      console.log({
        action: this.action,
        payload: this.payload,
        category: this.categoryName,

      });
    }



  }


  validateCommand(args) {
    // console.log(args);
    if (args == 'add' || args == 'a' || args == 'list' || args == 'delete') {
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

  validateCategory(args) {
    if (args == 'category') {
      return args
    } else {
      return '';
    }

  }
  categoryNameFunction(args) {

    if (args !== undefined && args !== '') {
      return args
    } else {
      return '';
    }
  }
}





module.exports = Input;