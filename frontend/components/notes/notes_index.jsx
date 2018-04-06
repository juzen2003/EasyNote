import React from 'react';
import NotesIndexItem from './notes_index_item';

class NotesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.notesCount = this.notesCount.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllNotes();
  }

  notesCount() {
    return this.props.notes.length;
  }

  render () {
    const noteItems = this.props.notes.map(note => <NotesIndexItem key={note.id} note={note}/>);
    return (
      <div>
        <ul>
          <div className="notes-index">
            <h3>NOTES</h3>
            <p>{this.notesCount()}</p>
          </div>
          {noteItems}
        </ul>
      </div>
    );
  }
}

export default NotesIndex;
