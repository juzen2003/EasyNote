import React from 'react';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.note;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // use quill library, config here
  componentDidMount() {
    var quill = new Quill('#editor', {
    theme: 'snow'
    });
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
      <div id="editor">
        <p>Title your note</p>
      </div>
    );
  }
}

export default NoteForm;
