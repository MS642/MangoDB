export const currentUserState = {
  currentUserID: "5f06550d61b7a5b8c0afb334",
};

const userReducer = (state = currentUserState, action) => {
  if (action.type === "GET_USER") {
    return state;
  }
  return state;
};

export default userReducer;
