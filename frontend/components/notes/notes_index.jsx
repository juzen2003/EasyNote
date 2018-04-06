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
    const noteItems = this.props.notes.map((note, idx) => <NotesIndexItem key={idx} note={note}/>);
    return (
      <div>
        <ul>
          <li className="notes-index-title">
            <h3>NOTES</h3>
            <p>{this.notesCount()} notes</p>
          </li>
          <li>
          {noteItems}
          </li>
        </ul>
      </div>
    );
  }
}

export default NotesIndex;
