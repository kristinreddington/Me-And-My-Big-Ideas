import React from 'react';
import './IdeaCard.css';

const IdeaCard = (props) => {

  return (
    <div className="Idea-list">
      <h1>{props.idea.title}</h1>
      <p>{props.idea.description}</p>
      {props.idea.images.map(image => <img id="idea-images" key={image.id} src={image.url} alt={props.idea.id} /> )}
      <div id="buttons">
      <button
        onClick={e => props.handleEdit(props.idea.id)} >
        Edit</button>
          &nbsp;
      <button
        onClick={ function(event) {
          props.handleRemove(props.idea.id)
        }} >
        Remove</button>
        </div>
    </div>

  )
}

export default IdeaCard;
