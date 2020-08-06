
export const checkUserLoggedIn = (callback, modalCallback) => {
  // First check if user is logged in
  if (isUserLoggedIn()) {
    if (callback) callback();
  } else {
    // TODO: open login modal
    if (modalCallback) {
      modalCallback();
      return false;
    }
  }
};

export const isUserLoggedIn = () => {
  return localStorage.getItem("loggedIn") === "true";
};
