import axios from "axios";
import { fetchFeedTasks } from "./feedActions";

const USER_URI = "http://localhost:8080/users/profile";


export const updateAvatarDB = (info) => {
  console.log("updateUserAvatar:", USER_URI.concat('/avatar/' + info.userID));
  return (dispatch) => {
    axios.put(USER_URI.concat('/avatar/' + info.userID), info.image)
      .then(() => {
        // OPTIONAL, we only need to update the feed if we want the current
        // users tasks to show in the feed
        dispatch(fetchFeedTasks());
      })
      .catch(error => {
        console.error(error.message);
      })
  }
};