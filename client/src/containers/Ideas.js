import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIdeas, deleteIdea } from '../actions/IdeaActions'

import IdeaCard from '../components/IdeaCard'
import './Ideas.css'

class Ideas extends Component {

  componentDidMount(){
    this.props.getIdeas()
  }

  handleNewIdea() {
      this.props.history.push('/ideas/new');
    }

  handleEdit(ideaId) {
    this.props.history.push(`/ideas/${ideaId}/edit`);
  }

render() {
  return(
    <div className="Idea-card">
    <hr />
        <div className="clearfix">
          <div className="pull-right">
            <button onClick={e => this.handleNewIdea()}> New Book </button>
            </div>
          </div>
      {this.props.ideas.map(idea => <IdeaCard handleEdit={this.props.handleEdit()} handleRemove={this.props.deleteIdea} idea={idea} key={idea.id}/> )}
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    ideas: state.ideas
  })
}

export default connect(mapStateToProps, { getIdeas, deleteIdea })(Ideas);
