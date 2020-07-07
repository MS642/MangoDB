export const currentUserState = {
  currentUserID: "patrickstar@gmail.com",
  currentUserName: "Patrick Star",
  currentUserAvatar: "https://i.imgur.com/18KrOIv.jpg"
};

/*export const userState = {
  users: [
    {userID: "patrickstar@gmail.com", userName: "Patrick Star", taskIDs:[3], totalClaps:5, totalMangos:18,
      clapsGiven: 25, mangosGiven:13,
    },
    {userID: "smidge@outlook.com", userName: "Smidge Maisel", taskIDs:[2], totalClaps:33, totalMangos:66,
      clapsGiven:31, mangosGiven:11,
    },
    {userID: "tigerdude@gmail.com", userName: "Tiger Dude", taskIDs:[1], totalClaps:12, totalMangos:346,
      clapsGiven:18, mangosGiven:22,
    },
    {userID: "mangosteen@yahoo.com", userName: "Mangosteen Coconutbottom", msgIDs:[0], totalClaps:24, totalMangos:999,
      clapsGiven: 42, mangosGivenTo:58,
    },
  ]
};*/



const userReducer = (state = currentUserState, action) => {
  if (action.type === "GET_USER") {
    return state;
  }
  if (action.type === "UPDATE_NAME") {
    let newState = state;
    newState.currentUserName = action.payload.newName;
    return newState;
  }
  if (action.type === "UPDATE_AVATAR") {
    let newState = state;
    newState.currentUserAvatar = action.payload.image;
    return newState;
  }
      return state;
};

export default userReducer;
