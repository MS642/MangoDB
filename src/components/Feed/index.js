import * as React from "react";
import "./Feed.scss";
import "./Feed.css";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import { createMuiTheme } from "@material-ui/core";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TaskUnit from "./components/TaskUnit/index";

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      globalFeed: true,
    };
  }

  /* componentDidMount() {
    this.state = {
      globalFeed: true
    };
  } */

  switchToggle = () => {
    const { globalFeed } = this.state;
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
    const { globalFeed } = this.state;
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
              {/*
              {(globalFeed)? <TaskUnit isGlobal={true}/> : <TaskUnit isGlobal={false}/>}
*/}
              <TaskUnit isGlobal={globalFeed} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
