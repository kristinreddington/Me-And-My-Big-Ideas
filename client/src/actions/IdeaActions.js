import fetch from 'isomorphic-fetch';
import { resetIdeaFormData } from './IdeaFormActions'
// Action creators
const setIdeas = ideas => {
  return {
    type: 'GET_IDEAS_SUCCESS',
    ideas
  }
}

const addIdea = idea => {
  return {
    type: 'CREATE_IDEA_SUCCESS',
    idea
  }
}

const removeIdea = idea => {
  return {
    type: 'DELETE_IDEA_SUCCESS',
    idea
  }
}

// Async Actions
export const getIdeas = () => {
  return (dispatch) => {
    return fetch('http://localhost:3001/api/ideas')
    .then(res => res.json())
    .then(ideas => dispatch(setIdeas(ideas)))
    .catch(error => console.log(error))
  }
}

export const createIdea = idea => {
  console.log(idea)
  return (dispatch) => {
    return fetch('http://localhost:3001/api/ideas', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ idea: idea })
    })
    .then(res => res.json())
    .then(idea => {
      dispatch(addIdea(idea))
      dispatch(resetIdeaFormData())
    })
    .catch(error => console.log(error))
  }
}

export const deleteIdea = idea => {
  console.log(idea)
  return (dispatch) => {
    return fetch(`http://localhost:3001/api/ideas/${idea}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: idea })
    })
    // .then(res => res.json())
    .then(idea => {
      dispatch(removeIdea(idea))
    })
    .then(dispatch(getIdeas()))
    .catch(error => console.log(error))
  }
}
