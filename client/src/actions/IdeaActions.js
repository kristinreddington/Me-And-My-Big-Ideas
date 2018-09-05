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
  return (dispatch) => {
    return fetch('http://localhost:3001/api/ideas', {
      type: 'POST',
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
