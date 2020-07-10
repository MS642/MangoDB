const initialUser = {};

const currentUserReducer = (currentUser = initialUser, action) => {
  switch (action.type) {
    case "GET_USER":
      return action.user;
    case "ADD_USER":
      return action.newUser;
    default:
      return currentUser;
  }
};

export default currentUserReducer;
