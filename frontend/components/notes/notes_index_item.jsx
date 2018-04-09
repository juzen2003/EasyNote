import React from 'react';
import { withRouter } from 'react-router-dom';


class NotesIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.note;
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick(e) {
    // debugger
    e.preventDefault();

    // this would route you over to another edit page
    //
    // this.props.fetchAllNotes().then(() => this.props.history.push(`/notes/${this.state.id}`))
    // debugger
    this.props.history.push(`/notes/${this.state.id}`);
  }

  handleDelete() {
    this.props.deleteNote(this.props.note.id).then(() => this.props.fetchAllNotes())
  }

  render() {
    return (
      <div className="notes-index-wrapper">
        <div className="notes-index-item" >
          <i className="material-icons delete-icon" onClick={this.handleDelete}>delete_forever</i>
          <div onClick={this.handleClick}>
            <h3>{this.props.note.title}</h3>
            <p>{this.props.note.body}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(NotesIndexItem);
