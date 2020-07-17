import axios from "axios";
import { addAlert } from "actions/alerts";

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
        dispatch(addAlert(result.status, "User retrieved successfully!"));
        dispatch({
          type: "GET_USER",
          user: result.data,
        });
      })
      .catch((error) => {
        const { response } = error;
        if (response && response.status === 404) {
          addUserAuth(dispatch, user);
        } else {
          dispatch(
            addAlert(response ? response.status : null, "User registered!")
          );
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
