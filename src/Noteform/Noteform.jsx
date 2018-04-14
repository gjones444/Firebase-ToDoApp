import React, { Component } from 'react';
import './Noteform.css';

class Noteform extends Component{
  constructor(props){
    super(props)
    this.state = {
      newNoteContent: '',
    }
    this.handleUserInput = this.handleUserInput.bind(this)
    this.writeNote = this.writeNote.bind(this)
  }

  handleUserInput(e){
    console.log(this)
    this.setState({
      newNoteContent: e.target.value, // text input
    })
  }

  writeNote(){
    this.setState({
      newNoteContent: '',
    })
    this.props.addNote(this.state.newNoteContent)
  }

  render(){
    return(
      <div className="formWrapper">
        <input className="NoteInput"
          placeholder="Write a new note..."
          value={this.state.newNoteContent}
          onChange={this.handleUserInput}/>
        <button className="noteButton" onClick={this.writeNote}>Add Note</button>
      </div>
    )

  }
}

export default Noteform
