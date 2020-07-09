const initialState = {
  loading: false,
  users: [],
  error: ""
};


const userProfileReducerDB = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_SUCCESS": {
      return {
        loading: false,
        users: [...action.payload],
        error: ""
      }
    }
    case "ADD_MANGO": {
      return state; //no match found ---> error state
    }
    case "UPDATE_AVATAR": {
      return state;
    }
    case "UPDATE_NAME": {
      return state;
    }
    default:
      return state;
  }
};

export default userProfileReducerDB;