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
import Spinner from "react-bootstrap/Spinner";
import TaskUnit from "./components/TaskUnit/index";

class Feed extends React.Component {
  constructor(props) {
    super(props);
    const { isGlobalFeed } = this.props;
    this.state = {
      globalFeed: isGlobalFeed,
    };
  }

  componentDidMount() {
    this.handleFeed();
    this.interval = setInterval(() => {
      this.handleFeed();
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleFeed = () => {
    const {
      fetchFeedTasks: fetchFeed,
      fetchFollowingFeed: fetchFollowing,
      feedLoading,
      isGlobalFeed,
      following,
      switchLoading,
    } = this.props;
    if (!feedLoading && !switchLoading) {
      if (isGlobalFeed) {
        fetchFeed();
      } else {
        fetchFollowing(following);
      }
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
      },
    });
    const { globalFeed } = this.state;
    const { isGlobalFeed, switchLoading, noTasksAvail } = this.props;
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
                      <Grid item>Global</Grid>
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
              {switchLoading ? (
                <div>
                  <div className="row">
                    <div className="col d-flex justify-content-center">
                      <h2>Loading...</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col d-flex justify-content-center">
                      <Spinner animation="grow" variant="secondary" />
                    </div>
                  </div>
                </div>
              ) : (
                <TaskUnit isGlobal={isGlobalFeed} />
              )}
              {noTasksAvail && !switchLoading ? (
                <h2>Sorry, there are no tasks to display!</h2>
              ) : null}
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
    switchLoading: state.feedDB.switchLoad,
    noTasksAvail: state.feedDB.noTasks,
  };
};

export default connect(mapStateToProps, {
  changeFeedType,
  fetchFeedTasks,
  fetchFollowingFeed,
})(Feed);
