export const currentUserState = {
  currentUserID: "5f06550d61b7a5b8c0afb334",
  currentUserName: "PatrickStar",
  currentUserAvatar: "https://i.imgur.com/18KrOIv.jpg"
};



const userReducer = (state = currentUserState, action) => {
  if (action.type === "GET_USER") {
    return state;
  }
  if (action.type === "UPDATE_NAME") {
    let newState = state;
    newState.currentUserName = action.payload.newName;
    return newState;
  }
  if (action.type === "UPDATE_AVATAR") {
    let newState = state;
    newState.currentUserAvatar = action.payload.image;
    return newState;
  }
      return state;
};

export default userReducer;
