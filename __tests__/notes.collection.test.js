'use strict';
require('@code-fellows/supergoose');

const note = require('../lib/models/notes-collection.js');
// const note = new note();
describe('note Model', () => {
    it('can create() a new note item', () => {
        const obj = { text: 'test note', category: 'haveFun' };
        return note.create(obj).then((record) => {
            Object.keys(obj).forEach((key) => {
                expect(record[key]).toEqual(obj[key]);
            });
        });
    });
    // it('can get() a note item', async () => {
    //     const obj = { text: 'test note', category: 'haveFun' };
    //     const expected = { text: 'test note', category: 'haveFun' };
    //     const record = await note.create(obj);
    //     const noteItem = await note.get(record._id);
    //     Object.keys(expected).forEach((key) => {
    //         expect(noteItem[key]).toEqual(expected[key]);
    //     });
    // });
});
