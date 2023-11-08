const initialState = {
    firstName: '',
    lastName: '',
  };
  
  const nameReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_NAMES':
        return { ...state, firstName: action.payload.firstName, lastName: action.payload.lastName };
      default:
        return state;
    }
  };
  
  export default nameReducer;