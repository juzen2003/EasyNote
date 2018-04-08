import React from 'react';
import { withRouter } from 'react-router-dom';

class NotesIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.note;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // debugger
    e.preventDefault()
    console.log("click");

    // this would route you over to another edit page
    //
    // this.props.fetchNote(this.state.id).then(() => this.props.history.push(`/notes/${this.state.id}`))
    // debugger
    this.props.history.push(`/notes/${this.state.id}`);
  }

  render() {
    return (
      <div className="notes-index-wrapper">
        <div className="notes-index-item" onClick={this.handleClick}>
          <h3>{this.props.note.title}</h3>
          <p>{this.props.note.body}</p>
        </div>
      </div>
    )
  }
}

export default withRouter(NotesIndexItem);
