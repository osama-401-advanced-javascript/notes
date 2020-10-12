'use strict';

const Note = require('../lib/notes.js');
jest.spyOn(global.console, 'log');

describe('Note Module', () => {
  it('does nothing when execute() with invalid options', () => {
    const note = new Note();
    note.execute({ action: 'dd', payload: 'this is a new note' });
    expect(console.log).not.toHaveBeenCalled();
  });
  it('log out options when execute() with options', () => {
    const note = new Note();
    note.execute({ action: 'add', payload: 'this is a new note' });
    // note.render();
    expect(console.log).toHaveBeenCalled();

  });

});
