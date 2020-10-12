'use strict';

const Note = require('../lib/notes.js');
jest.spyOn(global.console, 'log');

describe('Note Module', () => {
  it('does nothing when fetch() with invalid options', () => {
    const note = new Note();
    note.execute({ action: 'add', payload: 'this is a new note' });
    // note.render();
    expect(console.log).toHaveBeenCalled();

  });
});
