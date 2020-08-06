export const checkUserLoggedIn = (callback) => {
  // First check if user is logged in
  if (isUserLoggedIn()) {
    if (callback) callback();
  } else {
    // TODO: open login modal
  }
};

export const isUserLoggedIn = () => {
  return localStorage.getItem("loggedIn") === "true";
};
