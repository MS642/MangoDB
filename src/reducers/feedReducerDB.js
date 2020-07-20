const initialState = {
  loading: false,
  tasks: [],
  error: "",
};

const addMangoHelper = (feed, action) => {
  feed.forEach((feedItem) => {
    if (feedItem._id === action.payload.task_id) {
      feedItem.mangosReceived += action.payload.numMango;
    }
  });
  return feed;
};

// feed reducer
const feedReducerDB = (feed = initialState, action) => {
  switch (action.type) {
    case "FETCH_TASKS_SUCCESS": {
      return {
        loading: false,
        tasks: [...action.payload],
        error: "",
      };
    }
    case "ADD_CLAP": {
      return feed;
    }
    case "ADD_MANGO": {
      return {
        loading: false,
        tasks: addMangoHelper(feed.tasks, action),
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
