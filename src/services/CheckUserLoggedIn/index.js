export const checkUserLoggedIn = (callback, history) => {
  // First check if user is logged in
  if (isUserLoggedIn()) {
    if (callback) callback();
  } else if (history) {
    history.push("/");
  }
  return null;
};

export const isUserLoggedIn = () => {
  return localStorage.getItem("loggedIn") === "true";
};
