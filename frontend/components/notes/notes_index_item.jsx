import React from 'react';
import { withRouter } from 'react-router-dom';

class NotesIndexItem extends React.Component {
  // componentWillReceiveProps(nextProps) {
  //   debugger
  // }

  render() {
    return (
      <div className="notes-index-wrapper">
        <div className="notes-index-item">
          <h3>{this.props.note.title}</h3>
          <p>{this.props.note.body}</p>
        </div>
      </div>
    )
  }
}

export default withRouter(NotesIndexItem);
