import React from 'react';
import ReactQuill from 'react-quill';
import { Redirect, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';


class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    // const defaultState = this.props.note;
    this.state = this.props.note;
    // debugger
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.notebooksOpt = this.notebooksOpt.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.allowSubmit = this.allowSubmit.bind(this)
    // debugger
  }

  componentDidMount() {
    // this.props.fetchAllNotebooks;
  }

  componentWillReceiveProps(nextProps) {
    if ((nextProps.note.id !== undefined) && (this.props.match.params.noteId !== nextProps.match.params.noteId)) {
      // after fixing state shape of show, this setState works
      this.setState(nextProps.note)

      // this.state = nextProps.note;
      // console.log("re-fetch?");

    }
    // debugger
    // nextProps.match.params.noteId -> string
    // nextPtops.note.id -> integer
  }

  handleChange(type) {
    return e => {
      this.allowSubmit(e);
      this.setState({[type]: e.target.value});
    }
  }

  handleSelectChange(e) {
    const selectedVal = parseInt(e.target.value) || null
    this.setState({notebook_id: selectedVal})
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
    // debugger
    e.preventDefault();
    // get the selected notebook id
    const notebookEl = document.getElementsByClassName("selected-notebook");
    // debugger
    const selectedValue = (notebookEl[0].selectedIndex === 0) ? null : parseInt(notebookEl[0].value);

    // const finalState = {
      // id is needed here otherwise can't save
    //   title: this.state.title,
    //   body: this.state.body,
    //   body_with_style: this.state.body_with_style,
    //   notebook_id: selectedValue
    // }
    const finalState = merge({}, this.state, {notebook_id: selectedValue})

    if (this.props.location.pathname !== "/notes") {
      this.props.action(finalState).then(() => this.props.history.push('/notes'));
    } else {
      this.props.action(finalState).then(() =>
      this.setState({title:"", body:"", body_with_style:"", notebook_id:null})
      );
    }
  }

  allowSubmit(e) {
    const createButton =  document.getElementsByClassName("done-button");
    for(let i = 0; i < createButton.length; i++) {
      if(e.target.value && e.target.value.trim() !== "") {
        createButton[i].setAttribute("type", "button");
      } else {
        createButton[i].setAttribute("type", "hidden");
      }
    }
    // debugger
  }

  handleCancel(e) {
    e.preventDefault();
    // debugger
    this.setState(this.props.note);
    this.props.history.push('/notes');
  }

  notebooksOpt() {
    // debugger
    return (
      Object.values(this.props.notebooks).map((notebook,idx) =>
        <option
          value={notebook.id}
          key={idx}
        >{notebook.title}</option>)
    )
  }

  render () {
    // customize toolbar here
    const toolbar = [
      // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      [{ color: [] }, { background: [] }],
      ["bold", "italic", "underline", "strike"],
      // [{ script: "sub" }, { script: "super" }],
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


          <input
            className="done-button" onClick={this.handleSubmit}
            type="hidden"
            value="Done"
          />
          <button className="cancel-button" onClick={this.handleCancel}>Cancel</button>
        </div>
        <div className="rich-text-editor-area">


          <div className="editor-container">

            <select className="selected-notebook" value={this.state.notebook_id || ""} onChange={this.handleSelectChange}>
            <option value=""> -Notebook- </option>
            {this.notebooksOpt()}
            </select>

            <input
            className="note-title"
            type="text"
            value={this.state.title}
            placeholder="Title your note"
            onChange={this.handleChange('title')}
            />

            <ReactQuill
              value={this.state.body_with_style || ""}
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
