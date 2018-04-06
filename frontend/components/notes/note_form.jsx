import React from 'react';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.note;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // use quill library, config here
  componentDidMount() {
    var quill = new Quill('#editor-container', {
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          ['image', 'code-block']
        ]
      },
      placeholder: 'Drag files here or just start typing...',
      theme: 'snow'  // or 'bubble'
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
      <div id="editor-container">
        <p>Title your note</p>
      </div>
    );
  }
}

export default NoteForm;
