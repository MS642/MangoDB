// import axios from "axios";
// import { addErrorAlert } from "actions/alerts";

// const USERS_URI = "/users";

// export const getUsersAction = (usersID) => {
//     return (dispatch) => {
//       return axios
//       .post((USERS_URI.concat(`/mangoStalk}`), usersID))
//       .then((response) => {
//         const mangoStalkUsers = response.data;
//         console.log(mangoStalkUsers)
//         dispatch(updateMangoStalk(mangoStalkUsers));
//       })
//       .catch((err) => {
//         dispatch(addErrorAlert());
//         console.error(err);
//       });
//     }
//   };

// export const updateMangoStalk = (mangoStalkUsers) => {
//     return {
//         type: "UPDATE_MANGOSTALK",
//         payload: {
//             mangoStalkUsers
//         },
//     };
// };

// // export const removeUserFollowingAction = (taskID, subTaskID, newSubTask) => {
// //     return (dispatch) => {
// //         return axios
// //         .put(TASKS_URI.concat(`/${taskID}/subTasks/${subTaskID}`), newSubTask)
// //         .then(() => {
// //             dispatch(updateSubTask(taskID, subTaskID, newSubTask));
// //         })
// //         .catch((err) => {
// //             dispatch(addErrorAlert());
// //             console.error(err);
// //         });
// //     };
// // };

// export const removeUserFollower = (userID, userIDToRemove) => {
//     return {
//         type: "REMOVE_USER_FOLLOWER",
//         payload: userID,
//     };
// };

// export const removeUserFollowing = (userID, userIDToRemove) => {
//     return {
//         type: "REMOVE_USER_FOLLOWING",
//         payload: userID,
//     };
// };
