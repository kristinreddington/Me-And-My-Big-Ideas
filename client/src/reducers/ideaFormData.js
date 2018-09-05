const initialState = {
  title: '',
  description: '',
  images: [],
  notes: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return action.ideaFormData

      case 'RESET_IDEA_FORM':
        return initialState;

        default:
        return state;
  }
}
