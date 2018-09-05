export default (state = [], action) => {
  switch (action.type) {
    case 'GET_IDEAS_SUCCESS':
    return action.ideas

    case 'CREATE_IDEA_SUCCESS':
    return state.concat(action.idea)

    default:
    return state;
  }
}
