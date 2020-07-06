const userProfileState = {
  userProfiles: [
    {userID: "patrickstar@gmail.com", userName: "Patrick Star",
      avatar: "https://i.imgur.com/18KrOIv.jpg",
      numClapsGiven: 0, numMangosGiven:0,
      clapsReceived: 5, mangosReceived:18,
      numTasksCompleted: 0, numTasksTotal: 1,
    },
    {userID: "smidge@outlook.com", userName: "Smidge Maisel",
      avatar: "https://i.imgur.com/S6zrL4Q.jpg",
      numClapsGiven: 0, numMangosGiven:0,
      clapsReceived: 33, mangosReceived:666,
      numTasksCompleted: 0, numTasksTotal: 1,
    },
    {userID: "tigerdude@gmail.com", userName: "Tiger Dude",
      avatar: "https://i.imgur.com/4Fng6Qx.jpg",
      numClapsGiven: 0, numMangosGiven:0,
      clapsReceived: 12, mangosReceived:346,
      numTasksCompleted: 0, numTasksTotal: 1,
    },
    {userID: "mangosteen@yahoo.com", userName: "Mangosteen Coconutbottom",
      avatar: "https://i.imgur.com/4Fng6Qx.jpg",
      numClapsGiven: 0, numMangosGiven:0,
      clapsReceived: 24, mangosReceived: 999,
      numTasksCompleted: 0, numTasksTotal: 1,
    },
  ]
};



const userProfileReducer = (state = userProfileState, action) => {
  switch (action.type) {
    case "ADD_CLAP": {
      const newProfiles = [...state.userProfiles];
      for (const profile of newProfiles) {
        if (profile.userID === action.payload.donor) {
          profile.clapsGiven += 1;
          return {userProfiles: newProfiles};
        }
      }
      return state; //no match found ---> error state
    }
    case "ADD_MANGO": {
      const newProfiles = [...state.userProfiles];
      for (const profile of newProfiles) {
          if (profile.userID === action.payload.donor) {
            profile.numMangosGiven += Number(action.payload.numMango);
            return {userProfiles: newProfiles};
          }
      }
      return state; //no match found ---> error state
    }
    case "UPDATE_AVATAR": {
      const newProfiles = [...state.userProfiles];
      for (const profile of newProfiles) {
        if (profile.userID === action.payload.userID) {
          profile.avatar = action.payload.image;
          return {userProfiles: newProfiles};
        }
      }
      return state;
    }
    case "UPDATE_NAME": {
      const newProfiles = [...state.userProfiles];
      for (const profile of newProfiles) {
        if (profile.userID === action.payload.userID) {
          profile.userName = action.payload.newName;
          return {userProfiles: newProfiles};
        }
      }
      return state;
    }
    default:
      return state;
  }
};

export default userProfileReducer;