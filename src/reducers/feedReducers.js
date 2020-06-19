const feedState = {
  feedTasks: [
    {
      user: "Patrick Star",
      avatarURL: "https://i.imgur.com/18KrOIv.jpg",
      task: "Ummmm, wumbo?",
      claps: 5,
      mangoBits: 18,
      timestamp: "June 15, 2020 17:15:43",
      id: 3,
    },
    {
      user: "Smidge Maisel",
      avatarURL: "https://i.imgur.com/S6zrL4Q.jpg",
      task: "Come up with 5 new jokes for my act",
      claps: 33,
      mangoBits: 666,
      timestamp: "May 10, 2020 11:32:17",
      id: 2,
    },
    {
      user: "Tiger Dude",
      avatarURL: "https://i.imgur.com/4Fng6Qx.jpg",
      task: "Buy some food for my pet tiger and sue Netflix",
      claps: 12,
      mangoBits: 346,
      timestamp: "March 5, 2020 12:00:00",
      id: 1,
    },
    {
      user: "Mangosteen Coconutbottom",
      avatarURL: "https://i.imgur.com/wAy6yQt.jpg",
      task: "Making a tinfoil hat to protect myself from 5G.",
      claps: 24,
      mangoBits: 999,
      timestamp: "December 31, 1999 23:59:59",
      id: 0,
    },
  ],
};
// temp feed, just returning the state as-is
const feedReducer = (feed = feedState, action) => {
  switch (action.type) {
    case "FEED_DATA": {
      return feed;
    }
    case "ADD_CLAP": {
      const newFeed = [...feed.feedTasks];
      for (const msg of newFeed) {
        if (msg.id === action.payload) {
          msg.claps += 1;
        }
      }
      return { feedTasks: newFeed };
    }
    case "ADD_MANGO": {
      const newFeed = [...feed.feedTasks];
      for (const msg of newFeed) {
        if (msg.id === action.payload.id) {
          msg.mangoBits += Number(action.payload.numMango);
        }
      }
      return { feedTasks: newFeed };
    }
    default:
      return feed;
  }
};

export default feedReducer;
