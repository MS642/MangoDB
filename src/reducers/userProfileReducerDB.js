const initialState = {
  loading: false,
  users: [],
  error: ""
};


const userProfileReducerDB = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CLAP": {
      return state; //no match found ---> error state
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