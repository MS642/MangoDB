export const addClap = (info) => {
  return {
    type: "ADD_CLAP",
    payload: info,
  };
};

export const addMango = (info) => {
  return {
    type: "ADD_MANGO",
    payload: info,
  };
};

export const getUserProfile = (userID) => {
  return {
    type: "GET_USER_PROFILE",
    payload: userID,
  };
};
