const initialUserID = "";

const currentUserIDReducer = (currentUserID = initialUserID, action) => {
  switch (action.type) {
    case "GET_USER_AUTH":
      return action.user._id;
    case "ADD_USER":
      return action.newUser._id;
    default:
      return currentUserID;
  }
};

export default currentUserIDReducer;
