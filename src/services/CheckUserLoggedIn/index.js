export const checkUserLoggedIn = (callback, modalCallback) => {
  // First check if user is logged in
  if (isUserLoggedIn()) {
    if (callback) callback();
  } else if (modalCallback) {
    modalCallback();
  }
  return null;
};

export const isUserLoggedIn = () => {
  return localStorage.getItem("loggedIn") === "true";
};
