const MANGOTREEDATA = {
  fullGrowthMinutes: 400,
  maxLevel: 2,
  levelToMaxMangos: (level) => {
    return level * 3 + level * 2;
  },
  levelToMinMangos: (level) => {
    return level;
  },
};

export default MANGOTREEDATA;
