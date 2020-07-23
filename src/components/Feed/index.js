import * as React from "react";
import "./Feed.scss";
import "./Feed.css";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import { createMuiTheme } from "@material-ui/core";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import {
  changeFeedType,
  fetchFeedTasks,
  fetchFollowingFeed,
} from "actions/feedActions";
import TaskUnit from "./components/TaskUnit/index";

class Feed extends React.Component {
  constructor(props) {
    super(props);
    const { isGlobalFeed } = this.props;
    this.state = {
      globalFeed: isGlobalFeed,
      feedLength: 1,
    };
  }

  componentDidMount() {
    this.handleFeedType();
    this.interval = setInterval(() => {
      this.controlInterval();
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  controlInterval = () => {
    const {
      fetchFeedTasks: fetchFeed,
      fetchFollowingFeed: fetchFollowing,
      feedLoading,
      isGlobalFeed,
      following,
    } = this.props;
    if (!feedLoading) {
      if (isGlobalFeed) {
        fetchFeed();
      } else {
        fetchFollowing(following);
      }
    }
  };

  handleFeedType = () => {
    const {
      fetchFeedTasks: fetchFeed,
      fetchFollowingFeed: fetchFollowing,
      isGlobalFeed,
      following,
    } = this.props;
    if (isGlobalFeed) {
      fetchFeed();
    } else {
      fetchFollowing(following);
    }
  };

  switchToggle = () => {
    const { globalFeed } = this.state;
    const { changeFeedType: changeFeed, following } = this.props;
    changeFeed({ global: !globalFeed, following });
    this.setState({
      globalFeed: !globalFeed,
    });
  };

  render() {
    const theme = createMuiTheme({
      palette: {
        primary: {
          // Mango Orange
          main: "#FCA311",
        },
        secondary: {
          // Mango leaves green .
          main: "#11cb5f",
        },
      },
    });
    const { globalFeed, feedLength } = this.state;
    const { isGlobalFeed } = this.props;
    return (
      <div>
        <div className="container TaskFeed bg-dark text-white">
          <br />
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center">
              <h1 className="display-3">Hot Off The Press</h1>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center">
              <ThemeProvider theme={theme}>
                <FormGroup row>
                  <Typography component="div">
                    <Grid
                      component="label"
                      container
                      alignItems="center"
                      spacing={1}
                    >
                      <Grid item>Public</Grid>
                      <Grid item>
                        <Switch
                          checked={!globalFeed}
                          name="feedType"
                          color="primary"
                          onChange={this.switchToggle}
                        />
                      </Grid>
                      <Grid item>Following</Grid>
                    </Grid>
                  </Typography>
                </FormGroup>
              </ThemeProvider>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              {!(feedLength > 0) ? (
                <h2>Sorry, no tasks to display!</h2>
              ) : (
                <TaskUnit isGlobal={isGlobalFeed} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// state has entire state of app!!
const mapStateToProps = (state) => {
  return {
    isGlobalFeed: state.feedDB.isGlobal,
    following: state.userProfileDB.following,
    feedTasksDB: state.feedDB.tasks,
    feedLoading: state.feedDB.loading,
  };
};

export default connect(mapStateToProps, {
  changeFeedType,
  fetchFeedTasks,
  fetchFollowingFeed,
})(Feed);
