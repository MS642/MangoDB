import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";

const barTheme = createMuiTheme({
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

const ProgressBar = (props) => {
  const { value } = props;
  return (
    <ThemeProvider theme={barTheme}>
      <LinearProgress
        variant="determinate"
        style={{ height: "15px" }}
        value={value}
      />
    </ThemeProvider>
  );
};

export default ProgressBar;
