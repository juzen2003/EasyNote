import React from 'react';
// import { withRouter } from 'react-router-dom'

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.info
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
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
    // go to "/notes"
    this.props.processForm(user).then(
      () => this.props.history.push('/notes')
    );
  }

  renderErrors() {
    // clear errors messages in p tag after sucessfully login
    const errorMessage = (this.props.errors.session === null) ? [] : <p>{this.props.errors.session.responseJSON}</p>
    return(
      errorMessage
    );
  }

  render() {

    return (
      <div className='session-page'>
        <form className='session-form' onSubmit={this.handleSubmit}>
          <h3 className='form-title'>{this.props.formType}</h3>
          <label>
            <input className="username"
              type="text"
              value={this.state.username}
              onChange={this.handleChange("username")}
              placeholder="Username"
            />
          </label>
          <label>
            <input className="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange("password")}
              placeholder="Password"
            />
          </label>
          <input
            className="submit-button"
            type="submit"
            value={this.props.formType}
          />
        </form>
        {this.renderErrors()}
        {this.props.link}
      </div>
    );
  }
}

export default SessionForm;
