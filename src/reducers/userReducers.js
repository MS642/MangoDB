export const currentUserState = {
  currentUserID: "patrickstar@gmail.com"
};

export const userState = {
  users: [
    {userID: "patrickstar@gmail.com", userName: "Patrick Star", msgIDs:[3], totalClaps:5, totalMangos:18,
      clapsGivenTo:[], mangosGivenTo:[],
    },
    {userID: "smidge@outlook.com", userName: "Smidge Maisel", msgIDs:[2], totalClaps:33, totalMangos:66,
      clapsGivenTo:[], mangosGivenTo:[],
    },
    {userID: "tigerdude@gmail.com", userName: "Tiger Dude", msgIDs:[1], totalClaps:12, totalMangos:346,
      clapsGivenTo:[], mangosGivenTo:[],
    },
    {userID: "mangosteen@yahoo.com", userName: "Mangosteen Coconutbottom", msgIDs:[0], totalClaps:24, totalMangos:999,
      clapsGivenTo:[], mangosGivenTo:[],
    },
  ]
};



const userReducer = (state = currentUserState, action) => {
  if (action.type === "GET_USER") {
    return state;
  }
      return state;
};

export default userReducer;
