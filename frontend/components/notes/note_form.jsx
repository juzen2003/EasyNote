import React from 'react';
import ReactQuill from 'react-quill';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.note;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
  }

  handleTitleChange(type) {
    return e => this.setState({[type]: e.target.value})
  }

  // value here is always pointing to value in react component
  handleBodyChange(value, delta, source, editor) {
    // Need to trim here otherwise it would complain about the out of range
    const plainText = editor.getText().trim();
    const newBody = Object.assign(this.state, {
      body: plainText,
      body_with_style: value
     } );
    // console.log(editor.getText());
    // console.log(editor.getHTML());
    // debugger
    this.setState(newBody);
  }

  handleSubmit(e) {
    e.preventDefault();
    // debugger
    this.props.createNote(this.state).then(() => this.props.history.push('/notes'))
  }

  render () {
    // customize toolbar here
    const toolbar = [
      // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      [{ color: [] }, { background: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ script: "sub" }, { script: "super" }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ align: [] }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      ["blockquote", "code-block"],
      ["link", "image"],
      ['clean']
    ];

    return (
      <div className="rich-text-editor">
        <button onClick={this.handleSubmit}>Done</button>
        <input
          className="note-title"
          type="text"
          value={this.state.title}
          placeholder="Title your note"
          onChange={this.handleTitleChange('title')}
        />
        <div className="editor-container">
          <ReactQuill
            className="react-quill-component"
            value={this.state.body_with_style}
            modules={{toolbar}}
            placeholder="Start Typing here..."
            onChange={this.handleBodyChange}
          />
        </div>

      </div>
    );
  }
}

export default NoteForm;
