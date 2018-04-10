import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class NotebookForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.notebook;
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(() => this.props.history.push('/'));
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
              <input type="submit" value="Create notebook" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(NotebookForm);
