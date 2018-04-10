import React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';


class NotebooksIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.notebook;
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick(e) {
    // debugger
    e.preventDefault();
    this.props.history.push(`/notebooks/${this.props.notebook.id}`);
  }

  handleDelete() {
    this.props.deleteNotebook(this.props.notebook.id).then(() => {
       this.props.fetchAllNotebooks();
       // this.props.history.push('/notebooks');
     }
    );
  }

  render() {
    // remove Link for now to make sure layout is fine
    return (
      <div className="notebooks-index-wrapper">
        <Link to={`/notebooks/${this.props.notebook.id}`}>
          <div className="notebooks-index-item" >
            <i className="material-icons notebook-delete-icon" onClick={this.handleDelete}>delete_forever</i>

            <h3>{this.props.notebook.title}</h3>
            <p>{this.props.notes.length} notes</p>

          </div>
        </Link>
      </div>
    )
  }
}

export default withRouter(NotebooksIndexItem);
