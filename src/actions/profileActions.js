import axios from "axios";
import { addErrorAlert } from "actions/alerts";
import { fetchFeedTasks } from "./feedActions";

const USER_PROFILE_URI = "/users/profile";
const FETCH_USER_URI = "/users/";

export const fetchProfileSuccess = (profile) => {
  return {
    type: "FETCHED_CURRENT_PROFILE",
    payload: profile,
  };
};

export const fetchUserProfile = (id) => {
  return (dispatch) => {
    axios
      .get(FETCH_USER_URI.concat(id))
      .then((response) => {
        const profile = response.data;
        dispatch(fetchProfileSuccess(profile));
      })
      .catch((err) => {
        dispatch(addErrorAlert());
        console.error(err);
      });
  };
};

export const updateAvatarDB = (info) => {
  const fd = new FormData();
  fd.append("image", info.image, info.fileName);
  return (dispatch) => {
    axios
      .put(USER_PROFILE_URI.concat(`/avatar-upload/${info.userID}`), fd)
      .then(() => {
        // OPTIONAL, we only need to update the feed if we want the current
        // users tasks to show in the feed
        dispatch(fetchUserProfile(info.userID));
        // dispatch(updateAvatar(info)); //bug avatar component doesn't update without full fetch from DB
        dispatch(fetchFeedTasks());
      })
      .catch((err) => {
        dispatch(addErrorAlert());
        console.error(err);
      });
  };
};

export const updateNameDB = (info) => {
  return (dispatch) => {
    axios
      .put(USER_PROFILE_URI.concat(`/name/${info.userID}`), info)
      .then(() => {
        // OPTIONAL, we only need to update the feed if we want the current
        // users tasks to show in the feed
        dispatch(fetchUserProfile(info.userID));
        // dispatch(updateName(info)); //bug description component doesn't update without fetch from DB
        dispatch(fetchFeedTasks());
      })
      .catch((err) => {
        dispatch(addErrorAlert());
        console.error(err);
      });
  };
};

export const updateProfileUrlDB = (info) => {
  return (dispatch) => {
    axios
      .put(USER_PROFILE_URI.concat(`/profileUrl/${info.userID}`), info)
      .then(() => {
        dispatch(fetchUserProfile(info.userID));
        dispatch(fetchFeedTasks());
      })
      .catch((err) => {
        dispatch(addErrorAlert());
        console.error(err);
      });
  };
};

export const getMangoStalkAction = (usersID, isFollowers) => {
  return (dispatch) => {
    axios
      .post(FETCH_USER_URI.concat(`mangostalks/`), usersID)
      .then((response) => {
        const mangoStalkUsers = response.data;
        if (isFollowers) {
          dispatch(updateMangoStalkFollowers(mangoStalkUsers));
        } else {
          dispatch(updateMangoStalkFollowing(mangoStalkUsers));
        }
      })
      .catch((err) => {
        dispatch(addErrorAlert());
        console.error(err);
      });
  };
};

export const updateMangoStalkFollowers = (mangoStalkUsers) => {
  return {
    type: "GET_FOLLOWERS",
    payload: mangoStalkUsers,
  };
};

export const updateMangoStalkFollowing = (mangoStalkUsers) => {
  return {
    type: "GET_FOLLOWING",
    payload: mangoStalkUsers,
  };
};

export const followAction = (self, userID) => {
  return (dispatch) => {
    axios
      .put(FETCH_USER_URI.concat(`follow/${userID}`), self._id)
      .then(() => {
        dispatch(getMangoStalkAction(self.following, false));
      })
      .catch((err) => {
        dispatch(addErrorAlert());
        console.error(err);
      });
  };
};

export const unfollowAction = (self, userID) => {
  return (dispatch) => {
    axios
      .put(FETCH_USER_URI.concat(`unfollow/${userID}`), self._id)
      .then(() => {
        dispatch(getMangoStalkAction(self.following, false));
      })
      .catch((err) => {
        dispatch(addErrorAlert());
        console.error(err);
      });
  };
};
