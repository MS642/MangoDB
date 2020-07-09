const initialState = {
  loading: false,
  tasks: [],
  error: ""
};


const CLAP_LIMIT = 9999;
const MANGO_LIMIT = 9999;



// feed reducer
const feedReducerDB = (feed = initialState, action) => {
  switch (action.type) {
    case "FETCH_TASKS_SUCCESS": {
      return {
        loading: false,
        tasks: [...action.payload],
        error: ""
      }
    }
    case "FEED_DATA": {
      return feed;
    }
    case "ADD_CLAP": {
      return feed;
    }
    case "ADD_MANGO": {
      return feed;
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