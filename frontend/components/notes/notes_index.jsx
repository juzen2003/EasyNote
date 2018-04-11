import React from 'react';
import NotesIndexItem from './notes_index_item';

class NotesIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.state = this.props.notes
    this.notesCount = this.notesCount.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.selectIndexHeader = this.selectIndexHeader.bind(this);
  }

  componentDidMount() {
    if (this.props.formType === "notebookNotes") {
      this.props.action(this.props.notebookId);
    } else {
      this.props.action();
    }
  }

  // Whenever a new post is created
  // Should try to modify this part...
  componentWillReceiveProps(nextProps) {
    // take out this part otherwise it would try to multiple request all notes
    // if (this.props.notes.length !== nextProps.notes.length) {
    // this.props.action();
    // }
    // debugger

  }

  notesCount() {
    return this.props.notes.length;
  }

  handleClick(e) {
    // debugger
    // this.props.fetchNote()
  }

  selectIndexHeader() {
    if (this.props.notebookId) {
      return `${this.props.notebookTitle}`
    } else {
      return "NOTES"
    }
  }

  render () {
    // debugger
    const noteItems = this.props.notes.map((note, idx) => <NotesIndexItem
      key={idx}
      note={note}
      deleteNote={this.props.deleteNote}
      fetchNote={this.props.fetchNote}
      action={this.props.action}
      notebookId={this.props.notebookId}
    />).reverse();
    return (
      <div>
        <ul>
          <li className="notes-index-title">
            <h3>{this.selectIndexHeader()}</h3>
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
