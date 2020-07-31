const initialUser = {};

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
    case "GET_FOLLOWERS": {
      if (newUser.mangoStalk === undefined) {
        newUser.mangoStalk = { followers: [] };
      }
      newUser.mangoStalk.followers = action.payload;
      const cloneUsers = JSON.parse(JSON.stringify(newUser));
      return cloneUsers;
    }
    case "GET_FOLLOWING": {
      if (newUser.mangoStalk === undefined) {
        newUser.mangoStalk = { following: [] };
      }
      newUser.mangoStalk.following = action.payload;
      const cloneUsers = JSON.parse(JSON.stringify(newUser));
      return cloneUsers;
    }
    default:
      return currentUser;
  }
};

export default userProfileReducerDB;
