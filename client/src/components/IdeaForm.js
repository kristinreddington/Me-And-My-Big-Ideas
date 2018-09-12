import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createIdea } from '../actions/IdeaActions'
import { updateIdeaFormData } from '../actions/IdeaFormActions'
import '../containers/Ideas.css'

class IdeaForm extends Component {

  handleOnChange = (event) => {
    const { name, value } = event.target;
    const currentIdeaData = Object.assign({}, this.props.ideaFormData, {
      [name]: value
  })
  this.props.updateIdeaFormData(currentIdeaData);
}

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.createIdea(this.props.ideaFormData)
  }
  render() {
    const { title, description, file, note } = this.props.ideaFormData;
    return(
      <div>
      <h1> Add Idea & get after it! </h1>
        <form className="form-group" onChange={this.handleOnChange} onSubmit={this.handleOnSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input className="form-control" type="text" name="title" value={title} />
        </div>
        <div>
          <label className="label" htmlFor="description">Description:</label>
          <input className="form-control" type="text" name="description" value={description} />
        </div>
        <div>
          <label id="image-file" htmlFor="file">Image Url:</label>
          <input id="image" className="form-control" type="file" accept="image/png, image/jpeg" name="file" value={file} />
        </div>
        <div>
          <label className="label" htmlFor="note">Notes:</label>
          <input className="form-control" type="text" name="note" value={note} />
        </div>

        <button type="submit">Add Idea</button>
    </form>
  </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    ideaFormData: state.ideaFormData
  }
}

export default connect(mapStateToProps, {
  updateIdeaFormData, createIdea
  })(IdeaForm)
