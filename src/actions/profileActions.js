import axios from "axios";
import { fetchFeedTasks } from "./feedActions";

const USER_URI = "http://localhost:8080/users/profile";


export const updateAvatarDB = (info) => {
  console.log("updateUserAvatar:", USER_URI.concat('/avatar/' + info.userID));
  //const reader = new FileReader();
  //let data = reader.readAsDataURL(info.image);
  // convert uploaded file to blob
  console.log("updateAvatarAction:", info.image);
  //const blob = new Blob([new Uint8Array(info.image)]);
  const fd = new FormData();
  fd.append("image", info.image);
  return (dispatch) => {
    axios.put(USER_URI.concat('/avatar/' + info.userID), fd)
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