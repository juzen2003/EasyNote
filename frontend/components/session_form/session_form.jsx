import React from 'react';
// import { withRouter } from 'react-router-dom'

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.info
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => this.setState({[field]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    // login after submit
    // clear form
    // this.props.processForm(user).then(() => this.setState({username:"", password:""}));
    // go to "/"
    this.props.processForm(user).then(() => this.props.history.push('/notes'));
  }

  render() {

    return (
      <div>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleChange("username")}
            />
          </label>
          <label>Password
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleChange("password")}
            />
          </label>
          <input
            type="submit"
            value={this.props.formType}
          />
        </form>
        {this.props.link}
      </div>
    );
  }
}

export default SessionForm;
