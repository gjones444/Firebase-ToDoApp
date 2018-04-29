import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';
import Popup from "reactjs-popup";

class Note extends Component{

  constructor(props){
        super(props);
        this.state = {
          updateNoteContent: '',
        }
        this.noteContent = props.noteContent;
        this.noteId = props.noteId;
        this.handleUserUpdate = this.handleUserUpdate.bind(this);
        this.handleRemoveNote = this.handleRemoveNote.bind(this);
        this.handleUpdateNote = this.handleUpdateNote.bind(this);
    }

    handleUserUpdate(e){
      this.setState({
        updateNoteContent: e.target.value
      })
    }

    handleRemoveNote(id){
        this.props.removeNote(id);
    }

    handleUpdateNote(note, id){
      this.setState({
        updateNoteContent: '',
      })
      this.props.updateNote(this.state.updateNoteContent, this.noteId)
    }

  render(props){
    return(
      <div className="note fade-in">
                <span className="closebtn"
                      onClick={() => this.handleRemoveNote(this.noteId)}>
                      &otimes;
                </span>
                  <div className="Modalstyle">
                    <Popup
                      trigger={<span className="updatebtn"> &oplus; </span>}
                      modal
                      closeOnDocumentClick
                    >
                    <input
                      className="advancedSearchTextbox"
                      type="text"
                      placeholder="Write a new note..."
                      value={this.state.updateNoteContent}
                      onChange={this.handleUserUpdate}/>
                    <button onClick={() => this.handleUpdateNote(this.noteId)}>Update</button>
                    </Popup>
                  </div>
                <p className="noteContent">{ this.noteContent }</p>
      </div>
    )
  }
}

Note.propTypes = {
  noteContent: PropTypes.string
}

export default Note
