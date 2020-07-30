import axios from "axios";
import { addAlert, addErrorAlert } from "actions/alerts";
import { AlertType } from "reducers/alertReducer";

const USERS_URI = "/users";

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
          type: "GET_USER_AUTH",
          user: result.data,
        });
      })
      .catch((error) => {
        const { response } = error;
        if (response && response.status === 404) {
          addUserAuth(dispatch, user);
        } else {
          dispatch(addAlert(AlertType.SUCCESS, "User registered!"));
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

// Get user via the profileUrl
export const getUserProfileUrl = (profileUrl) => {
  return (dispatch) => {
    dispatch({
      type: "USER_PROFILE_URL_LOADING",
    });
    axios
      .get(`${USERS_URI}/profileUrl/${profileUrl}`)
      .then((result) => {
        dispatch({
          type: "GET_USER_PROFILE_URL",
          user: result.data,
        });
      })
      .catch((err) => {
        dispatch(addErrorAlert());
        console.error(err);
      });
  };
};
