import React from 'react';
import NotesIndexItem from './notes_index_item';

class NotesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.notesCount = this.notesCount.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllNotes();
  }

  // Whenever a new post is created
  componentWillReceiveProps(nextProps) {
    if (this.props.notes.length !== nextProps.notes.length) {
    this.props.fetchAllNotes();
    //   this.props.notes.push(Object.values(nextProps.notes.slice(-1)[0])[0]);
    //
    }
    // debugger
  }

  notesCount() {
    return this.props.notes.length;
  }

  handleClick(e) {
    debugger
    // this.props.fetchNote()
  }

  render () {
    // debugger
    const noteItems = this.props.notes.map((note, idx) => <NotesIndexItem
      key={idx}
      note={note}
      deleteNote={this.props.deleteNote}
      fetchNote={this.props.fetchNote}
    />).reverse();
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
