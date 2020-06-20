const feedState = {
  feedTasks: [
    {
      user: "Patrick Star",
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
      avatarURL: "https://i.imgur.com/S6zrL4Q.jpg",
      task: "Come up with 5 new jokes for my act",
      claps: 33,
      clapsGivenBy: [],
      mangoBits: 666,
      mangosGivenBy: [],
      timestamp: "May 10, 2020 11:32:17",
      taskID: 2,
    },
    {
      user: "Tiger Dude",
      avatarURL: "https://i.imgur.com/4Fng6Qx.jpg",
      task: "Buy some food for my pet tiger and sue Netflix",
      claps: 12,
      clapsGivenBy: [],
      mangoBits: 346,
      mangosGivenBy: [],
      timestamp: "March 5, 2020 12:00:00",
      taskID: 1,
    },
    {
      user: "Mangosteen Coconutbottom",
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

// temp feed, just returning the state as-is
const feedReducer = (feed = feedState, action) => {
  switch (action.type) {
    case "FEED_DATA": {
      return feed;
    }
    case "ADD_CLAP": {
      const newFeed = [...feed.feedTasks];

      for (const msg of newFeed) {
        if (msg.taskID === action.payload) {
          msg.claps += 1;
        }
      }
      return { feedTasks: newFeed };
    }
    case "ADD_MANGO": {
      const newFeed = [...feed.feedTasks];
      for (const msg of newFeed) {
        if (msg.taskID === action.payload.id) {
          if (!msg.mangosGivenBy.includes(action.payload.donor) && (msg.mangoBits < MANGO_LIMIT)) { //check if donor already gave mangos
            msg.mangoBits += Number(action.payload.numMango);
            msg.mangosGivenBy.push(action.payload.donor);
            return { feedTasks: newFeed };
          } else {
            return feed; //no more mangos can be given to this task
          }
        }
      }
      return feed; //no match found ---> an error state
    }
    default:
      return feed;
  }
};

export default feedReducer;
