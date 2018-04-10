import React from 'react';
import { withRouter } from 'react-router-dom';

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
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.title}
            placeholder="Title Your notebook"
            onChange={this.update('title')} />
          <input type="button" value="Cancel" />
          <input type="submit" value="Create notebook" />
        </form>
      </div>
    );
  }
}

export default withRouter(NotebookForm);
