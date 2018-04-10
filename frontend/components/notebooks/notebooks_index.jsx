import React from 'react';
import NotebooksIndexItem from './notebooks_index_item';

class NotebooksIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.state = this.props.notebooks
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllNotebooks();
  }

  // Whenever a new post is created
  // Should try to modify this part...
  componentWillReceiveProps(nextProps) {
    if (this.props.notebooks.length !== nextProps.notebooks.length) {
    this.props.fetchAllNotebooks();
    }
    // debugger

  }

  // this would avoid the parent firing onClick event as well whenever the notebooks index is clicked
  handleClick(e) {
    // debugger
    // this.props.fetchNotebook()
    e.stopPropagation()
  }

  render () {
    // debugger
    const notebookItems = this.props.notebooks.map((notebook, idx) => <NotebooksIndexItem
      key={idx}
      notebook={notebook}
      deleteNotebook={this.props.deleteNotebook}
      fetchNotebook={this.props.fetchNotebook}
      fetchAllNotebooks={this.props.fetchAllNotebooks}
    />).reverse();
    return (
      <div className="notebooks-index-area" onClick={this.handleClick}>
        <ul>
          <li className="notebooks-index">
            <div className="notebooks-index-title">
              <h3>NOTEBOOKS</h3>
              <i className="material-icons">add</i>
            </div>
            <input type="text" placeholder="Find a notebook"/>
          </li>
          <li>
          {notebookItems}
          </li>
        </ul>
      </div>
    );
  }
}

export default NotebooksIndex;
