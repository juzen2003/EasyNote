import React from 'react';

class NotesIndexItem extends React.Component {
  render() {
    return (
      <div className="notes-index-item">
        <h3>{this.props.note.title}</h3>
        <p>{this.props.note.updated_at}</p>
        <div>{this.props.note.body}</div>
      </div>
    )
  }
}

export default NotesIndexItem;
