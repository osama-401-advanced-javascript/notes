'use strict';

class Notes {
  constructor() {

  }


  execute(obj) {
    if (obj.action == 'add') {
      this.add(obj)

    }
  }

  add(obj) {
    let note = {
      Id: 0,
      text: obj.payload
    }
    // this.render(note);
    console.log(note);
    console.log(`Adding Note : ${note.text}`);
  }
  // render(result) {
  //   console.log(result);
  // }

}








module.exports = Notes