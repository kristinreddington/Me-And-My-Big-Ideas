import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createIdea } from '../actions/IdeaActions'
import { updateIdeaFormData } from '../actions/IdeaFormActions'

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
    const { title, description, images, notes } = this.props.ideaFormData;
    return(
      <div>
      Add Product to inventory
        <form onChange={this.handleOnChange} onSubmit={this.handleOnSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" value={title} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input type="text" name="description" value={description} />
        </div>
        <div>
          <label htmlFor="images">Image Url:</label>
          <input type="text" name="images" value={images} />
        </div>
        <div>
          <label htmlFor="notes">Notes:</label>
          <input type="text" name="notes" value={notes} />
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
