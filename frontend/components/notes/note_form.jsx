import React from 'react';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.note;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    return e => this.setState({[type]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNote(this.state).then(() => this.props.history.push('/notes'))
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Title
            <input
              type="text"
              value={this.state.title}
              onChange={this.handleChange("title")}
            />
          </label>
          <label>Body
            <textarea
              value={this.state.body}
              onChange={this.handleChange("body")}
            />
          </label>
          <input type="submit" value="submit"/>
        </form>
      </div>
    );
  }
}

export default NoteForm;
