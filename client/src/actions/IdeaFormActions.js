export const updateIdeaFormData = ideaFormData => {
  return {
    type: 'UPDATE_DATA',
    ideaFormData
  }
}

export const resetIdeaFormData = () => {
  return {
    type: 'RESET_IDEA_FORM'
  }
}
