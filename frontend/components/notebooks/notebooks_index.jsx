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

  handleClick(e) {
    debugger
    // this.props.fetchNotebook()
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
      <div>
        <ul>
          <li className="notebooks-index-title">
            <h3>NOTEBOOKS</h3>
            <p>Add Notebook link here</p>
          </li>
          <li>
            <p>dummy area for searching...</p>
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
