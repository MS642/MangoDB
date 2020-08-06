export const LOGGED_IN_STATE = {
  LOGGED_IN: "true",
  LOGGED_OUT: "false",
};

export const checkUserLoggedIn = (callback, history) => {
  // First check if user is logged in
  if (isUserLoggedIn()) {
    if (callback) callback();
  } else if (history) {
    history.push("/");
  }
  return null;
};

export const setUserLoggedState = (loggedInState) => {
  localStorage.setItem("loggedIn", loggedInState);
};

export const isUserLoggedIn = () => {
  return localStorage.getItem("loggedIn") === "true";
};
