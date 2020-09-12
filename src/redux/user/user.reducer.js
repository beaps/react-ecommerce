const INITIAL_STATE = {
  currentUser: null
};

// The state is what the redux store pass to this reducer whenever an action fires
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      // New object that represents the new state
      return {
        ...state,
        currentUser: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
