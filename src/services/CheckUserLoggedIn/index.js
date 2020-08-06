const checkUserLoggedIn = (callback) => {
  // First check if user is logged in
  const loggedIn = localStorage.getItem("loggedIn") === "true";
  if (loggedIn) {
    if (callback) callback();
  } else {
    // TODO: open login modal
  }
};

export default checkUserLoggedIn;
