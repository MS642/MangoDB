export const updateAvatar = (img) => {
  console.log("updateAvatar called");
  return {
    type: "UPDATE_AVATAR",
    payload: img,
  };
};