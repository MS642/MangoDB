export const currentUserState = {
  currentUserID: "",
};

const currentUserIDReducer = (state = currentUserState, action) => {
  switch (action.type) {
    case "GET_USER_AUTH":
      return action.user._id;
    case "ADD_USER":
      return action.newUser._id;
    default:
      return state;
  }
};

export default currentUserIDReducer;
