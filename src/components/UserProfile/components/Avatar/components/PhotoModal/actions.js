export const updateAvatar = (img) => {
  return {
    type: "UPDATE_AVATAR",
    payload: img,
  };
};