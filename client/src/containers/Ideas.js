import React, { Component } from 'react';
import './Ideas.css'
import axiosClient from '../axiosClient';

class Ideas extends Component {
  constructor(props) {
    super(props)
    this.state = { ideas: [] };
  }

  // componentDidMount(){
  //   this.props.getIdeas()
  // }

  componentWillMount() {
    axios.get('/api/ideas.json').then(response => {
      this.setState({ ideas: response.data });
    });
  }

  render() {
    return (
      <div className="BookIndex col-md-12" style={{ marginTop: 10 }}>
        <div className="clearfix">
          <div className="pull-right">
            <button
              onClick={e => this.handleNewIdea()} >

              New Idea
            </button>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTableBody()}
          </tbody>
        </table>
      </div>
    );
  }

  handleNewIdea() {
    this.props.history.push('/ideas/new');
  }

  renderTableBody() {
    return this.state.ideas.map(book => {
      return (
        <tr key={book.id}>
          <td>
            {book.id}
          </td>
          <td>
            {book.title}
          </td>
          <td>
            {book.description}
          </td>
          <td>
            <button
              onClick={e => this.handleEdit(book.id)} >
              Edit
            </button>
            &nbsp;
            <button
              onClick={e => this.handleRemove(book.id)}
              className="danger">
              Remove
            </button>
          </td>
        </tr>
      );
    });
  }

  handleEdit(ideaId) {
    this.props.history.push(`/ideas/${ideaId}/edit`);
  }

  handleRemove(ideaId) {
    let ideas = this.state.ideas;
    ideas = ideas.filter(idea => {
      return idea.id !== ideaId;
    });
    this.setState({ ideas: ideas });
    axiosClient.delete(`/api/ideas/${ideaId}`);
  }
}

export default Ideas;
