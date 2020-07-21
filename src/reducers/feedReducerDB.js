const initialState = {
  loading: false,
  tasks: [],
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
    case "FETCH_TASKS_SUCCESS": {
      return {
        loading: false,
        tasks: [...action.payload],
        error: "",
      };
    }
    case "ADD_CLAP": {
      return {
        loading: true,
        tasks: addClapHelper(feed.tasks, action),
        error: "",
      };
    }
    case "ADD_MANGO": {
      return {
        loading: true,
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
