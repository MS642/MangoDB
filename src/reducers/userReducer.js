export const currentUserState = {
  currentUserID: "patrickstar@gmail.com"
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
      return state;
};

export default userReducer;
