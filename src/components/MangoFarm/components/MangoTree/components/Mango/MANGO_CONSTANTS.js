export const MANGO_STATE = {
  BLOOMING: "blooming",
  UNRIPE: "unripe",
  RIPENING: "ripening",
  RIPE: "ripe",
};

const { BLOOMING, UNRIPE, RIPENING, RIPE } = MANGO_STATE;
export const MANGO_TIPS = {
  [BLOOMING]: "A cute mango flower",
  [UNRIPE]: "Still unripe, give it more time before harvesting",
  [RIPENING]: "You could harvest now but it'll probably be sour",
  [RIPE]: "Ooooh, that is one ripe, juicy mango!",
};
