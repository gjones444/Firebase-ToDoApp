import React, { Component } from 'react';
import Note from './Note/Note';
import './App.css';
import Noteform from './Noteform/Noteform';
import {DB_CONFIG} from './config/config.js';
import firebase from 'firebase/app';
import 'firebase/database';

class App extends Component {

  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('notes');

    this.state = {
      notes: [],
    }

  }

  componentWillMount(){
    const previousNotes = this.state.notes

    // Firebase displays data as a snapshot
    this.database.on('child_added', snap => {
      // console.log(snap.key)
      previousNotes.push({
        id: snap.key,
        noteContent: snap.val().noteContent,
      })

      this.setState({
        notes: previousNotes
      })

      this.database.on('child_removed', snap => {
        for(var i=0; i < previousNotes.length; i++){
          if(previousNotes[i].id === snap.key){
            previousNotes.splice(i, 1);
          }
        }

        this.setState({
          notes: previousNotes
        })
      })

      this.database.on('child_changed', snap => {
        for(var i=0; i < previousNotes.length; i++){
          if(previousNotes[i].id === snap.key){
            console.log(previousNotes)
          }
        }

        this.setState({
          notes: previousNotes
        })
      })

    })

  }

  addNote(note){
    console.log(this.database.child('notes'))
    this.database.push().set({ noteContent: note })
  }

  removeNote(noteId){
    this.database.child(noteId).remove();
  }

  updateNote(note, noteId){
    this.database.child(noteId).set({ noteContent: note })
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
                removeNote ={this.removeNote}
                updateNote ={this.updateNote}/>
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
