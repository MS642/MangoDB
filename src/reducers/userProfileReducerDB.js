const initialState = {
  user: {
    username: "",
    avatar: "",
    totalMangosEarned: 0,
    totalClapsEarned: 0,
    tasksCompleted: 0,
  },
};

const userProfileReducerDB = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHED_CURRENT_PROFILE": {
      return {
        user: action.payload,
      };
    }
    case "ADD_MANGO": {
      return state;
    }
    case "UPDATE_AVATAR": {
      const newState = state;
      newState.avatar = action.payload.image;
      return newState;
    }
    case "UPDATE_NAME": {
      const newState = state;
      newState.username = action.payload.newName;
      return newState;
    }
    default:
      return state;
  }
};

export default userProfileReducerDB;
