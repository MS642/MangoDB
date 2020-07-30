const { ObjectID } = require("mongodb");

const initialState = {
  loading: false,
  initialLoad: true,
  tasksGlobal: [],
  tasksFollowing: [],
  noGlobalTasks: false,
  noFollowTasks: false,
  isGlobal: true,
  error: "",
};

const removeClapHelper = (feedItem, userObjectID) => {
  const { givenClaps } = feedItem;
  const newGivenClaps = [...givenClaps];
  for (let i = 0; i < newGivenClaps.length; i += 1) {
    if (newGivenClaps[i].id.toString() === userObjectID.id.toString()) {
      newGivenClaps.splice(i, 1);
    }
  }
  return newGivenClaps;
};

const addClapHelper = (feed, action) => {
  const newFeed = [...feed];
  const { task_id, user_id } = action.payload;
  const userObjectID = ObjectID(user_id);
  return newFeed.map((feedItem) => {
    const { givenClaps } = feedItem;
    if (feedItem._id === task_id) {
      if (action.payload.value === 1) {
        return {
          ...feedItem,
          givenClaps: [...givenClaps, userObjectID],
        };
      }
      return {
        ...feedItem,
        givenClaps: removeClapHelper(feedItem, userObjectID),
      };
    }
    return feedItem;
  });
};

const addMangoHelper = (feed, action) => {
  const newFeed = [...feed];
  const { task_id, numMango, donor } = action.payload;
  return newFeed.map((feedItem) => {
    if (feedItem._id === task_id) {
      const { mangoTransactions } = feedItem;
      return {
        ...feedItem,
        mangoTransactions: [
          ...mangoTransactions,
          {
            user_id: donor,
            mangoCount: numMango,
          },
        ],
      };
    }
    return feed;
  });
};

// feed reducer
const feedReducerDB = (feed = initialState, action) => {
  switch (action.type) {
    case "CHANGE_FEED_TYPE": {
      return {
        ...feed,
        isGlobal: action.payload,
        loading: true,
        initialLoad: false,
      };
    }
    case "FETCH_TASKS_SUCCESS": {
      return {
        ...feed,
        loading: false,
        initialLoad: false,
        tasksGlobal: [...action.payload],
        noGlobalTasks: [...action.payload].length <= 0,
      };
    }
    case "FETCH_FOLLOWING_TASKS_SUCCESS": {
      return {
        ...feed,
        loading: false,
        tasksFollowing: [...action.payload],
        noFollowTasks: [...action.payload].length <= 0,
      };
    }
    case "ADD_CLAP": {
      return {
        ...feed,
        loading: true,
        tasksGlobal: addClapHelper(feed.tasksGlobal, action),
        tasksFollowing: addClapHelper(feed.tasksFollowing, action),
      };
    }
    case "UPDATE_CLAP_SUCCESS": {
      return {
        ...feed,
        loading: false,
      };
    }
    case "ADD_MANGO": {
      return {
        ...feed,
        loading: true,
        tasksGlobal: addMangoHelper(feed.tasksGlobal, action),
        tasksFollowing: addMangoHelper(feed.tasksFollowing, action),
      };
    }
    case "ADD_MANGO_SUCCESS": {
      return {
        ...feed,
        loading: false,
      };
    }
    case "UPDATE_NAME": {
      return feed;
    }
    case "UPDATE_AVATAR": {
      return feed;
    }
    default:
      return feed;
  }
};

export default feedReducerDB;
