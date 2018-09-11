import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIdeas, deleteIdea } from '../actions/IdeaActions'

import IdeaCard from '../components/IdeaCard'
import './Ideas.css'

class Ideas extends Component {

  componentDidMount(){
    this.props.getIdeas()
  }

  handleEdit(ideaId){
    this.props.history.push(`/books/${ideaId}/edit`);
  }

  handleRemove(ideaId) {
    this.props.deleteIdea()
  }

render() {
  return(
    <div className="Idea-card">
    <hr />
      {this.props.ideas.map(idea => <IdeaCard handleEdit={this.handleEdit} handleRemove={this.handleRemove} idea={idea} key={idea.id}/> )}
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    ideas: state.ideas
  })
}

export default connect(mapStateToProps, { getIdeas })(Ideas);
