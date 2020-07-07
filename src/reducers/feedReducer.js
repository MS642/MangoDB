const feedState = {
  feedTasks: [
    {
      user: "Patrick Star",
      userID: "patrickstar@gmail.com",
      avatarURL: "https://i.imgur.com/18KrOIv.jpg",
      task: "Ummmm, wumbo?",
      claps: 5,
      clapsGivenBy: [],
      mangoBits: 18,
      mangosGivenBy: [],
      timestamp: "June 15, 2020 17:15:43",
      taskID: 3,
    },
    {
      user: "Smidge Maisel",
      userID: "smidge@outlook.com",
      avatarURL: "https://i.imgur.com/S6zrL4Q.jpg",
      task: "Come up with 5 new jokes for my act",
      claps: 3333,
      clapsGivenBy: [],
      mangoBits: 6666,
      mangosGivenBy: [],
      timestamp: "May 10, 2020 11:32:17",
      taskID: 2,
    },
    {
      user: "Tiger Dude",
      userID: "tigerdude@gmail.com",
      avatarURL: "https://i.imgur.com/4Fng6Qx.jpg",
      task: "Buy some food for my pet tiger and sue Netflix",
      claps: 122,
      clapsGivenBy: [],
      mangoBits: 346,
      mangosGivenBy: [],
      timestamp: "March 5, 2020 12:00:00",
      taskID: 1,
    },
    {
      user: "Mangosteen Coconutbottom",
      userID: "mangosteen@yahoo.com",
      avatarURL: "https://i.imgur.com/wAy6yQt.jpg",
      task: "Making a tinfoil hat to protect myself from 5G.",
      claps: 24,
      clapsGivenBy: [],
      mangoBits: 999,
      mangosGivenBy: [],
      timestamp: "December 31, 1999 23:59:59",
      taskID: 0,
    },
  ],
};

const CLAP_LIMIT = 9999;
const MANGO_LIMIT = 9999;


// remove donor to clapsGivenBy for task
const removeClapUser = (task, donor) => {
  const index = task.clapsGivenBy.indexOf(donor);
  if (index > -1) {
    task.clapsGivenBy.splice(index, 1);
  }
};

// clap handler helper
const doClap = (tsk, action, newFeed) => {
  tsk.claps += Number(action.payload.value);
  if (action.payload.value === 1) {
    tsk.clapsGivenBy.push(action.payload.donor);
  } else {
    removeClapUser(tsk, action.payload.donor);
  }
  return { feedTasks: newFeed };
};

// clap handler
const handleAddClap = (feed, action) => {
  const newFeed = [...feed.feedTasks];
  for (const tsk of newFeed) {
    if (tsk.taskID === action.payload.id) {
      if (tsk.claps < CLAP_LIMIT) {
        return doClap(tsk, action, newFeed);
      } else {
        return feed;
      }
    }
  }
  return feed; //no match found ---> error state
};

// mango handler
const handleMango = (feed, action) => {
  const newFeed = [...feed.feedTasks];
  for (const tsk of newFeed) {
    if (tsk.taskID === action.payload.id) {
      if (!tsk.mangosGivenBy.includes(action.payload.donor) && (tsk.mangoBits < MANGO_LIMIT)) { //check if donor already gave mangos
        tsk.mangoBits += Number(action.payload.numMango);
        tsk.mangosGivenBy.push(action.payload.donor);
        return { feedTasks: newFeed };
      } else {
        return feed; //no more mangos can be given to this task
      }
    }
  }
  return feed; //no match found ---> error state
};


// avatar handler
const handleAvatarChange = (feed, action) => {
  const newFeed = [...feed.feedTasks];
  for (const tsk of newFeed) {
    if (tsk.userID === action.payload.userID) {
      tsk.avatarURL = action.payload.image;
    }
  }
  return {feedTasks: newFeed};
};


// name handler
const handleNameChange = (feed, action) => {
  const newFeed = [...feed.feedTasks];
  for (const tsk of newFeed) {
    if (tsk.userID === action.payload.userID) {
        tsk.user = action.payload.newName;
    }
  }
  return {feedTasks: newFeed};
};


// feed reducer
const feedReducer = (feed = feedState, action) => {
  switch (action.type) {
    case "FEED_DATA": {
      return feed;
    }
    case "ADD_CLAP": {
      return handleAddClap(feed, action);
    }
    case "ADD_MANGO": {
      return handleMango(feed, action);
    }
    case "UPDATE_NAME": {
      return handleNameChange(feed, action);
    }
    case "UPDATE_AVATAR": {
      return handleAvatarChange(feed, action);
    }
    default:
      return feed;
  }
};

export default feedReducer;
