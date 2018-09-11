export default (state = [], action) => {
  switch (action.type) {
    case 'GET_IDEAS_SUCCESS':
    return action.ideas

    case 'CREATE_IDEA_SUCCESS':
    return state.concat(action.idea)

    case 'DELETE_IDEA_SUCCESS':
    const firstMatchIndex = state.indexOf(action.idea)
    return state.filter((item, index) => index !== firstMatchIndex )

    default:
    return state;
  }
}
