'use strict';
const Recored = require('./models/notes-schema.js');

class Notes {

  constructor() {

  }

  execute(obj) {

    if (obj.action == 'add') {
      this.add(obj)

    } else if (obj.action == 'delete') {
      this.delete(obj.payload)
    } else if (obj.action == 'list') {
      this.list(obj)
    }
  }

  async add(obj) {
    console.log(obj);
    const obj2 = {
      text: obj.payload,
      category: obj.categoryName,
    }
    const newNote = new Recored(obj2);
    await newNote.save();
    console.log('Note Saved', newNote);

    // let note = {
    //   Id: 0,
    //   text: obj.payload
    // }
    // this.render(obj);
    // console.log(note);
    // console.log(`Adding Note : ${note.text}`);
  }

  async delete(id) {

    await Recored.deleteOne({ _id: id });
    console.log(`deleted Note ${id}`);

  }
  async list(obj) {
    console.log(obj);
    if (obj.action && obj.categoryName == '') {
      const allNotes = await Recored.find({});
      allNotes.forEach(val => {
        console.log(val.text, `\n Category : ${val.category}          ID : ${val._id} `);
        console.log('----------------------------------------------------------------------');

      })
    } else {
      const allNotes = await Recored.find({ category: obj.categoryName });
      console.log(allNotes);
      allNotes.forEach(val => {
        console.log(val.text, `\n Category : ${val.category}          ID : ${val._id} `);
        console.log('----------------------------------------------------------------------');
      });
    }

  }
}


// render(obj) {
//   console.log(`hiiiiiiiiiiiiiiiiii${obj}`);
// }



module.exports = Notes