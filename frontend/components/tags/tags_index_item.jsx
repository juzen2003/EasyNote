import React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';


class TagsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.tag;
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleRemoveModal = this.handleRemoveModal.bind(this);
  }

  handleClick(e) {
    // debugger
    e.preventDefault();
    this.props.history.push(`/tags/${this.props.tag.id}`);
  }

  handleDelete(e) {
    // add this so that by clicking delete, modal would still exist
    e.stopPropagation();
    this.props.deleteTag(this.props.tag.id).then(() => {
       this.props.fetchAllTags();
       this.props.history.push('/tags');
     }
    );
  }

  handleRemoveModal(e) {
    e.preventDefault();
    const modals = document.getElementsByClassName("is-open");
    // debugger;
    for(let i = 0; i < modals.length; i++) {
        modals[i].classList.remove("is-open");
        // this would go back to main and remove modal
        this.props.history.push(`/tags/${this.props.tag.id}/notes`)
    }
  }

  render() {
    // remove Link for now to make sure layout is fine
    return (
      <div className="tags-index-wrapper">
        <Link to={`/tags/${this.props.tag.id}/notes`} onClick={this.handleRemoveModal}>
          <div className="tag-index-item" >
            <i className="material-icons tag-delete-icon" onClick={this.handleDelete}>delete_forever</i>

            <h3>{this.props.tag.name}</h3>
            <p>{this.props.notes.length} notes</p>

          </div>
        </Link>
      </div>
    )
  }
}

export default withRouter(TagsIndexItem);
