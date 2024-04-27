import React, { Component } from 'react';
import NotesForm from './NotesForm';
import NotesPanel from './NotesPanel';

export default class NotesApp extends Component {
  constructor(props) {
    super(props);
    this.state = {notes: []};
  }

  componentDidMount() {
    this.loadNotes();
  }

  loadNotes = () => {
    fetch(process.env.REACT_APP_NOTES_URL)
    .then(response => response.json())
    .then(notes => this.setState({notes}));
  }

  onAddNote = note => {
    fetch(process.env.REACT_APP_NOTES_URL, {
      method: 'POST',
      body: JSON.stringify(note),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => this.loadNotes());
  }

  onDeleteNote = id => {
    fetch(`${process.env.REACT_APP_NOTES_URL}/${id}`, {
      method: 'DELETE'
    })
    .then(() => this.loadNotes());
  }

  render() {
    return (
      <div className="notes-app">
        <div className="notes-app-title row">
          <div className="notes-title">Notes</div>
          <button className="notes-upload" onClick={this.loadNotes}>↺</button>
        </div>
        <NotesPanel items={this.state.notes} onDeleteNote={this.onDeleteNote}/>
        <NotesForm onAddNote={this.onAddNote}/>
      </div>
    )
  }
}
