import React from 'react';

class NotesIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllNotes();
  }

  render () {
    const noteItems = this.props.notes.map(note => <p key={note.id}>{note.title}</p>)
    return (
      <div>
        <ul>
          {noteItems}
        </ul>
      </div>
    );
  }
}

export default NotesIndex;
