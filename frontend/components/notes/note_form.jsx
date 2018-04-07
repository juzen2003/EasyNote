import React from 'react';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.note;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // use quill library, config here
  componentDidMount() {
    const quill = new Quill('#editor-container', {
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
    // just pure text
    // this.state.body = document.getElementById("editor-container").innerText
    // with styling
    // this.state.body = document.getElementById("editor-container").innerHTML
    this.setState({body: document.getElementById("editor-container").innerText})
    // debugger
    this.props.createNote(this.state).then(() => this.props.history.push('/notes'))
  }

  render () {
    return (
      <div className="rich-text-editor">
        <button onClick={this.handleSubmit}>Done</button>
        <input
          className="note-title"
          type="text"
          value={this.state.title}
          placeholder="Title your note"
          onChange={this.handleChange('title')}
        />
        <div id="editor-container">
        </div>
      </div>
    );
  }
}

export default NoteForm;
