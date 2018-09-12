import React, { Component } from 'react';
import IdeaForm2 from './IdeaForm2';


class IdeaEdit extends Component {
  render() {
    return (
      <div className="BookEdit col-md-8 col-md-offset-2">
        <h2>Edit Idea</h2>
        <IdeaForm2 history={this.props.history} match={this.props.match} />
      </div>
    );
  }
}

export default IdeaEdit;
