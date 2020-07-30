const initialProfile = {
  loading: true,
  user: {},
};

const profileReducer = (currentProfile = initialProfile, action) => {
  let newUser = {};
  switch (action.type) {
    case "USER_PROFILE_URL_LOADING":
      return {
        loading: true,
        user: {},
      };
    case "GET_USER_PROFILE_URL":
      newUser = action.user === "" ? {} : action.user;
      return {
        loading: false,
        user: newUser,
      };
    case "UPDATE_PROFILE_URL":
      return {
        loading: false,
        user: {},
      };
    default:
      return currentProfile;
  }
};

export default profileReducer;
