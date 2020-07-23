const initialState = {
  loading: false,
  switchLoad: false,
  tasks: [],
  noTasks: false,
  isGlobal: true,
  error: "",
};

const addClapHelper = (feed, action) => {
  const newFeed = [...feed];
  newFeed.forEach((feedItem) => {
    if (feedItem._id === action.payload.task_id) {
      feedItem.clapsReceived += action.payload.value;
    }
  });
  return newFeed;
};

const addMangoHelper = (feed, action) => {
  const newFeed = [...feed];
  newFeed.forEach((feedItem) => {
    if (feedItem._id === action.payload.task_id) {
      feedItem.mangosReceived += action.payload.numMango;
    }
  });
  return newFeed;
};

// feed reducer
const feedReducerDB = (feed = initialState, action) => {
  switch (action.type) {
    case "CHANGE_FEED_TYPE": {
      return {
        loading: true,
        switchLoad: true,
        tasks: [...feed.tasks],
        noTasks: feed.noTasks,
        isGlobal: action.payload,
        error: "",
      };
    }
    case "FETCH_TASKS_SUCCESS": {
      return {
        loading: false,
        switchLoad: false,
        tasks: [...action.payload],
        noTasks: [...action.payload].length <= 0,
        isGlobal: feed.isGlobal,
        error: "",
      };
    }
    case "ADD_CLAP": {
      return {
        loading: true,
        switchLoad: feed.switchLoad,
        tasks: addClapHelper(feed.tasks, action),
        noTasks: feed.noTasks,
        isGlobal: feed.isGlobal,
        error: "",
      };
    }
    case "UPDATE_CLAP_SUCCESS": {
      return {
        loading: false,
        switchLoad: feed.switchLoad,
        tasks: [...feed.tasks],
        noTasks: feed.noTasks,
        isGlobal: feed.isGlobal,
        error: "",
      };
    }
    case "ADD_MANGO": {
      return {
        loading: true,
        switchLoad: feed.switchLoad,
        tasks: addMangoHelper(feed.tasks, action),
        noTasks: feed.noTasks,
        isGlobal: feed.isGlobal,
        error: "",
      };
    }
    case "ADD_MANGO_SUCCESS": {
      return {
        loading: false,
        switchLoad: feed.switchLoad,
        tasks: [...feed.tasks],
        noTasks: feed.noTasks,
        isGlobal: feed.isGlobal,
        error: "",
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
