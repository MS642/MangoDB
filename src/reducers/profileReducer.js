const initialProfile = {};

const profileReducer = (currentProfile = initialProfile, action) => {
  const newProfile = currentProfile;
  switch (action.type) {
    case "GET_USER_PROFILE_URL":
      return action.user;
    default:
      return newProfile;
  }
};

export default profileReducer;
