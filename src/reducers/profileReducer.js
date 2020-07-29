const initialProfile = {
  loading: true,
  user: {},
};

const profileReducer = (currentProfile = initialProfile, action) => {
  const newProfile = currentProfile;
  switch (action.type) {
    case "USER_PROFILE_URL_LOADING":
      return {
        loading: true,
        user: {},
      };
    case "GET_USER_PROFILE_URL":
      return {
        loading: false,
        user: action.user,
      };
    case "UPDATE_PROFILE_URL":
      return {
        loading: false,
        user: {},
      };
    default:
      return newProfile;
  }
};

export default profileReducer;
