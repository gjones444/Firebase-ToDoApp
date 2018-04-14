import React, { Component } from 'react';
import Note from './Note/Note';
import './App.css';
import Noteform from './Noteform/Noteform';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      notes: [
        { id: 1, noteContent: "Note 1"},
        { id: 2, noteContent: "Note 1"}
      ],
    }
  }

  addNote(note){
    const previousNote = this.state.notes
    previousNote.push(note)
  }

  render() {
    return (
      <div className="notesWrapper">
        <div className="notesHeader">
          <div className="heading">React & Firebase To-Do List</div>
        </div>
        <div className="notesBody">
          {
            this.state.notes.map((note) => {
              return (
                <Note noteContent={note.noteContent}
                noteId={note.id}
                key={note.id}
                removeNote ={this.removeNote}/>
              )
            })
          }
        </div>
        <div className="notesFooter">
          <Noteform addNote={this.addNote}/>
        </div>
      </div>
    )
  }
}

export default App;
