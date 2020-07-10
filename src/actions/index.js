import axios from "axios";

const USERS_URI = "http://localhost:8080/users";

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

// Get user info via auth0 user.sub id
export const getUserAuth = (user) => {
  return (dispatch) => {
    axios
      .get(`${USERS_URI}/auth0/${user.sub}`)
      .then((result) => {
        dispatch({
          type: "GET_USER",
          user: result.data,
        });
      })
      .catch(() => {
        // User doesn't exist. Adding user.
        addUserAuth(dispatch, user);
      });
  };
};

const addUserAuth = (dispatch, user) => {
  axios
    .post(USERS_URI, {
      auth0_id: user.sub,
      username: user.nickname,
      email: user.email,
      avatar: user.picture,
    })
    .then((result) => {
      dispatch({
        type: "ADD_USER",
        newUser: result.data,
      });
    })
    .catch((error) => {
      // TODO: handle error
      return error;
      // console.error(error.message);
    });
};
