const initialUser = {
  username: "",
  avatar: "",
  totalMangosEarned: 0,
  totalClapsEarned: 0,
  tasksCompleted: 0,
};

const userProfileReducerDB = (currentUser = initialUser, action) => {
  const newUser = currentUser;
  switch (action.type) {
    case "GET_USER_AUTH":
      return action.user;
    case "ADD_USER":
      return action.newUser;
    case "FETCHED_CURRENT_PROFILE":
      return action.payload;
    case "ADD_MANGO":
      return currentUser;
    case "UPDATE_AVATAR":
      newUser.avatar = action.payload.image;
      return newUser;
    case "UPDATE_NAME": {
      newUser.username = action.payload.newName;
      return newUser;
    }
    default:
      return currentUser;
  }
};

export default userProfileReducerDB;
