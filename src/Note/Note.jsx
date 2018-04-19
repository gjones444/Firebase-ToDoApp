import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';

class Note extends Component{

  constructor(props){
        super(props);
        this.noteContent = props.noteContent;
        this.noteId = props.noteId;
        this.handleRemoveNote = this.handleRemoveNote.bind(this);
        this.handleUpdateNote = this.handleUpdateNote.bind(this);
    }

    handleRemoveNote(id){
        this.props.removeNote(id);
    }

    handleUpdateNote(id){
        this.props.updateNote(id);
    }

  render(props){
    return(
      <div className="note fade-in">
                <span className="closebtn"
                      onClick={() => this.handleRemoveNote(this.noteId)}>
                      &otimes;
                </span>
                <span className="updatebtn"
                      onClick={() => this.handleUpdateNote(this.noteId)}>
                      &oplus;
                </span>
                <p className="noteContent">{ this.noteContent }</p>
            </div>
    )
  }
}

Note.propTypes = {
  noteContent: PropTypes.string
}

export default Note
