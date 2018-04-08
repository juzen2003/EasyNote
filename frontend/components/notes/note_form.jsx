import React from 'react';
import ReactQuill from 'react-quill';
import { withRouter } from 'react-router-dom';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    const defaultState = this.props.note;
    this.state = defaultState;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleTitleChange(type) {
    return e => this.setState({[type]: e.target.value})
  }

  // react-quill onChange handler
  // value here is always pointing to value in react component
  handleBodyChange(value, delta, source, editor) {
    // Need to trim here otherwise it would complain about the out of range
    const plainText = editor.getText().trim();
    const newBody = Object.assign(this.state, {
      body: plainText,
      body_with_style: value
     } );
    // debugger
    this.setState(newBody);
  }

  handleSubmit(e) {
    e.preventDefault();
    // debugger
    this.props.action(this.state).then(() => this.props.history.push('/notes'))
  }

  handleCancel(e) {
    e.preventDefault();
    // debugger
    this.setState(this.props.note);
    this.props.history.push('/notes');
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
        <div className="rich-text-editor-button-area">
          <button className="done-button" onClick={this.handleSubmit}>Done</button>
          <button className="cancel-button" onClick={this.handleCancel}>Cancel</button>
        </div>
        <div className="rich-text-editor-area">
          <input
            className="note-title"
            type="text"
            value={this.state.title}
            placeholder="Title your note"
            onChange={this.handleTitleChange('title')}
          />
          <div className="editor-container">
            <ReactQuill
              value={this.state.body_with_style}
              modules={{toolbar}}
              placeholder="Start Typing here..."
              onChange={this.handleBodyChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NoteForm);
