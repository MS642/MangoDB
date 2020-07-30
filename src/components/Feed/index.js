import * as React from "react";
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
    this.preLoadAllFeeds();
    this.interval = setInterval(() => {
      this.handleFeed();
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  preLoadAllFeeds = () => {
    const {
      fetchFeedTasks: fetchFeed,
      fetchFollowingFeed: fetchFollowing,
      following,
    } = this.props;
    fetchFeed();
    fetchFollowing(following);
  };

  handleFeed = () => {
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
    const {
      isGlobalFeed,
      noGlobalTasksAvail,
      noFollowTasksAvail,
      initialLoad,
    } = this.props;
    return (
      <div>
        <div className="container TaskFeed bg-dark text-white">
          <br />
          <div className="row">
            <div className="col-12 feedTitleDiv d-flex justify-content-center align-items-center">
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
                      <Grid item>Everyone</Grid>
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
            <div className="col taskFeedContainer d-flex justify-content-center">
              {initialLoad ? (
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
              ) : null}
              {!(noGlobalTasksAvail && isGlobalFeed) ||
              !(noFollowTasksAvail && !isGlobalFeed) ? (
                <TaskUnit isGlobal={isGlobalFeed} />
              ) : null}
              {(noGlobalTasksAvail && isGlobalFeed) ||
              (noFollowTasksAvail && !isGlobalFeed) ? (
                <div>
                  <div className="row">
                    <div className="col d-flex justify-content-center">
                      <h2>Sorry, there are no tasks to display!</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col d-flex justify-content-center">
                      <h4>Tip: try following more people! :)</h4>
                    </div>
                  </div>
                </div>
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
    feedLoading: state.feedDB.loading,
    noGlobalTasksAvail: state.feedDB.noGlobalTasks,
    noFollowTasksAvail: state.feedDB.noFollowTasks,
    initialLoad: state.feedDB.initialLoad,
  };
};

export default connect(mapStateToProps, {
  changeFeedType,
  fetchFeedTasks,
  fetchFollowingFeed,
})(Feed);
