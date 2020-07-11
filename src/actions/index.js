import axios from "axios";

const USERS_URI = "http://localhost:8080/users";

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
      .catch((error) => {
        if (error.response.status === 404) {
          addUserAuth(dispatch, user);
        } else {
          console.error(error.message);
        }
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
      console.error(error.message);
    });
};
