const initialUser = {};

const userProfileReducerDB = (currentUser = initialUser, action) => {
  const newUser = currentUser;
  switch (action.type) {
    case "GET_USER_AUTH":
      return action.user;
    case "ADD_USER":
      return action.newUser;
    case "FETCHED_CURRENT_PROFILE":
      return action.payload;
    case "ADD_MANGO": {
      const { numMango } = action.payload;
      const { mangoCount } = currentUser;
      return {
        ...currentUser,
        mangoCount: mangoCount - numMango,
      };
    }
    case "ADD_MANGO_TO_USER": {
      const { totalMangoCount, mangoCount } = currentUser;
      const mangosEarned = action.payload;
      return {
        ...currentUser,
        mangoCount: mangoCount + mangosEarned,
        totalMangoCount: totalMangoCount + mangosEarned,
      };
    }
    case "UPDATE_AVATAR":
      newUser.avatar = action.payload.image;
      return newUser;
    case "PURCHASE_BADGE_REQUEST":
      newUser.badges.push(action.payload.badge);
      return newUser;
    case "UPDATE_NAME": {
      newUser.username = action.payload.newName;
      return newUser;
    }
    case "GET_FOLLOWERS": {
      if (newUser.mangoStalk === undefined) {
        newUser.mangoStalk = { followers: [] };
      }
      newUser.mangoStalk.followers = action.payload;
      const cloneUsers = JSON.parse(JSON.stringify(newUser));
      return cloneUsers;
    }
    case "GET_FOLLOWING": {
      if (newUser.mangoStalk === undefined) {
        newUser.mangoStalk = { following: [] };
      }
      newUser.mangoStalk.following = action.payload;
      const cloneUsers = JSON.parse(JSON.stringify(newUser));
      return cloneUsers;
    }
    case "INITIALIZE_MANGO_TREE": {
      return {
        ...newUser,
        mangoTrees: action.payload,
      };
    }
    case "HARVEST_MANGO": {
      const { mangoTrees } = newUser;
      const { treeId, mangoIndex } = action.payload;
      const treeIndex = mangoTrees.findIndex((tree) => tree.id === treeId);
      mangoTrees[treeIndex].mangos[mangoIndex] = new Date().getTime();
      return {
        ...newUser,
        mangoTrees: [...mangoTrees],
      };
    }
    default:
      return currentUser;
  }
};

export default userProfileReducerDB;
