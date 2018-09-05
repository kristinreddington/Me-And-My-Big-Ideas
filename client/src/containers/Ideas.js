import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIdeas } from '../actions/IdeaActions'
import './Ideas.css'

class Ideas extends Component {

  componentDidMount(){
    this.props.getIdeas()
  }

render() {
  return(
    <div class="idea-card">
    "All my genius ideas mwahahah"
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ideas: state.ideas
  }
}

export default connect(mapStateToProps, { getIdeas })(Ideas);
