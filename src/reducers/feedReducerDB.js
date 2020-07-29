const initialState = {
  loading: false,
  switchLoad: false,
  initialLoad: true,
  tasks: [],
  tasksFollowing: [],
  noTasks: false,
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
    return feedItem;
  });
};

// feed reducer
const feedReducerDB = (feed = initialState, action) => {
  switch (action.type) {
    case "CHANGE_FEED_TYPE": {
      return {
        ...feed,
        loading: true,
        switchLoad: true,
        initialLoad: false,
      };
    }
    case "FETCH_TASKS_SUCCESS": {
      return {
        ...feed,
        loading: false,
        switchLoad: false,
        initialLoad: false,
        tasks: [...action.payload],
        noTasks: [...action.payload].length <= 0,
      };
    }
    case "ADD_CLAP": {
      return {
        ...feed,
        tasks: addClapHelper(feed.tasks, action),
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
        tasks: addMangoHelper(feed.tasks, action),
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
