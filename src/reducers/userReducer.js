export const currentUserState = {
  currentUserID: "",
};

const userReducer = (state = currentUserState, action) => {
  switch (action.type) {
    case "GET_USER":
      return { currentUserID: action.user._id };
    case "ADD_USER":
      return { currentUserID: action.newUser._id };
    default:
      return state;
  }
};

export default userReducer;
