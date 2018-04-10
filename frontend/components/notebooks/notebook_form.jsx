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
      <div>
        <i className="material-icons create-notebook-icon">import_contacts</i>
        <h3>CREATE NOTEBOOK</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.title}
            placeholder="Title Your notebook"
            onChange={this.update('title')} />
          <Link to="/notes">Cancel</Link>
          <input type="submit" value="Create notebook" />
        </form>
      </div>
    );
  }
}

export default withRouter(NotebookForm);
