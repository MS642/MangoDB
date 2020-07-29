const initialState = {
  loading: false,
  switchLoad: false,
  initialLoad: true,
  tasksGlobal: [],
  tasksFollowing: [],
  noGlobalTasks: false,
  noFollowTasks: false,
  isGlobal: true,
  error: "",
};

const addClapHelper = (feed, action) => {
  const newFeed = [...feed];
  const { task_id, user_id } = action.payload;
  return newFeed.map((feedItem) => {
    const { givenClaps } = feedItem;
    if (feedItem._id === task_id) {
      return {
        ...feedItem,
        givenClaps: [...givenClaps, { user_id }],
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
        switchLoad: false,
        initialLoad: false,
      };
    }
    case "FETCH_TASKS_SUCCESS": {
      return {
        ...feed,
        loading: false,
        switchLoad: false,
        initialLoad: false,
        tasksGlobal: [...action.payload],
        noGlobalTasks: [...action.payload].length <= 0,
      };
    }
    case "FETCH_FOLLOWING_TASKS_SUCCESS": {
      return {
        ...feed,
        loading: false,
        switchLoad: false,
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
