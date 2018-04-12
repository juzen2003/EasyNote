import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import NotebooksIndexContainer from '../notebooks/notebooks_index_container'

class NavSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
    this.handleLogout = this.handleLogout.bind(this);
    this.handleNotebooksClick = this.handleNotebooksClick.bind(this);
    this.handleRemoveModal = this.handleRemoveModal.bind(this);
    this.openModal = this.openModal.bind(this);
    // debugger
  }

  componentDidMount() {
    this.openModal();
    // debugger;
  }

  componentWillReceiveProps(nextProps) {
    // this.openModal();
    // debugger
  }

  openModal() {
    if (this.props.modal === "is-open") {
      const modals = document.getElementsByClassName("notebooks-modal-area");
      // debugger;
      for(let i = 0; i < modals.length; i++) {
        if(modals[i].classList.contains("is-open") === false) {
          modals[i].classList.add("is-open");
        }
      }
    }
    // debugger;
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleNotebooksClick(e) {
    e.preventDefault();
    const modals = document.getElementsByClassName("notebooks-modal-area");
    // debugger;
    // whenever modal is closed, "/notes"
    // whenever modal is open, "/notebooks"
    for(let i = 0; i < modals.length; i++) {
      if(modals[i].classList.contains("is-open")) {
        modals[i].classList.remove("is-open");
        this.props.history.push("/notes")
      } else {
        modals[i].classList.add("is-open");
        this.props.history.push("/notebooks")
      }
    }
  }

  handleRemoveModal(e) {
    e.preventDefault();
    const modals = document.getElementsByClassName("is-open");
    // debugger;
    for(let i = 0; i < modals.length; i++) {
        modals[i].classList.remove("is-open");
    }
    this.props.history.push('/notes')
  }

  render() {
    return (
      <div>
      <div className="side-bar-area">
        <img className="side-bar-logo" src="/logo.png" alt="Logo"/>
        <ul>
          <li>
            <Link to="/notes/new"><i className="material-icons plus-icon" >add_circle_outline</i></Link>
          </li>
          <li>
            <Link to="/notes"><i className="material-icons notes-icon" onClick={this.handleRemoveModal}>description</i></Link>
          </li>
          <li>
            <i className="material-icons notebooks-icon" onClick={this.handleNotebooksClick}>library_books</i>
          </li>
          <li>
            <i className="material-icons tags-icon" >local_offer</i>
          </li>
        </ul>
        <i className="material-icons logout-icon" onClick={this.handleLogout}>power_settings_new</i>

      </div>
        <div className="notebooks-modal-area" onClick={this.handleNotebooksClick}>
          <NotebooksIndexContainer />
        </div>
     </div>
    )
  }
}

export default NavSideBar;
