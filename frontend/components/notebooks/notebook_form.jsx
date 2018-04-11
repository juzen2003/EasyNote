import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class NotebookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.notebook;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.allowSubmit = this.allowSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      // debugger
      this.allowSubmit(e);
      this.setState({[field]: e.target.value});
    };
  }

  allowSubmit(e) {
    const createButton =  document.getElementsByClassName("create-notebook-button");
    for(let i = 0; i < createButton.length; i++) {
      if(e.target.value && e.target.value.trim() !== "") {
        createButton[i].disabled = false;
      } else {
          createButton[i].disabled = true;
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(() => this.props.history.push('/notebooks'));
    // was '/'
  }

  render () {
    return (
      <div className="notebook-form-wrapper">
        <div className="notebook-form">
          <i className="material-icons create-notebook-icon">import_contacts</i>
          <h3>CREATE NOTEBOOK</h3>
          <div className="form-breaker"></div>
          <form onSubmit={this.handleSubmit}>
            <input className="notebook-title-input"
              type="text"
              value={this.state.title}
              placeholder="Title Your notebook"
              onChange={this.update('title')} />
            <div className="notebook-form-button">
              <Link className="cancel-notebook-add" to="/notebooks">Cancel</Link>
              <input className="create-notebook-button" type="submit" value="Create notebook" disabled/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(NotebookForm);
