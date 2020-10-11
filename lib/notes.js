'use strict';

const Notes = function (obj) {
  this.execute(obj)
}


Notes.prototype.execute = function (obj) {
  if (obj.action == 'add') {
    this.add(obj)

  }
}

Notes.prototype.add = function (obj) {
  let note = {
    Id: 0,
    text: obj.payload
  }
  console.log(note);
  console.log(`Adding Note : ${note.text}`);
}



module.exports = Notes