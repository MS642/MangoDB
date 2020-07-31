const MANGO_TREE_DATA = {
  fullGrowthMinutes: 1000,
  maxLevel: 2,
  levelToMaxMangos: (level) => {
    return level * 3 + level * 2;
  },
  levelToMinMangos: (level) => {
    return level;
  },
};

export default MANGO_TREE_DATA;
