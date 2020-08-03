const initialState = {
  loading: false,
  initialLoad: true,
  clapLoading: false,
  tasksGlobal: [],
  tasksFollowing: [],
  noGlobalTasks: false,
  noFollowTasks: false,
  isGlobal: true,
  error: "",
};

const removeClapHelper = (feedItem, user_id) => {
  const { givenClaps } = feedItem;
  const newGivenClaps = [...givenClaps];
  if (givenClaps.length === 1) {
    newGivenClaps.pop();
  } else {
    const index = newGivenClaps.indexOf(user_id);
    if (index > -1) {
      newGivenClaps.splice(index, 1);
    }
  }
  return newGivenClaps;
};

const addClapHelper = (feed, action) => {
  const newFeed = [...feed];
  const { task_id, user_id } = action.payload;
  return newFeed.map((feedItem) => {
    const { givenClaps } = feedItem;
    if (feedItem._id === task_id) {
      if (action.payload.value === 1) {
        return {
          ...feedItem,
          givenClaps: [...givenClaps, { user_id }],
        };
      }
      return {
        ...feedItem,
        givenClaps: removeClapHelper(feedItem, user_id),
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
    case "FETCH_USER_COMPLETED_TASKS_SUCCESS": {
      return {
        ...feed,
        loading: false,
        tasksUser: [...action.payload],
        noUsertasks: [...action.payload].length <= 0,
      };
    }
    case "ADD_CLAP": {
      return {
        ...feed,
        loading: true,
        clapLoading: true,
        tasksGlobal: addClapHelper(feed.tasksGlobal, action),
        tasksFollowing: addClapHelper(feed.tasksFollowing, action),
      };
    }
    case "UPDATE_CLAP_SUCCESS": {
      return {
        ...feed,
        loading: false,
        clapLoading: false,
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
