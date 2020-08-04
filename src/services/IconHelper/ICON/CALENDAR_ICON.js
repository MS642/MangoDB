import MATERIAL_UI_THEME from "./MATERIAL_UI_THEME";

const className = "task-icon";

const CALENDAR_ICON = {
  calendar: {
    normal: {
      name: "date_range",
      theme: MATERIAL_UI_THEME.outlined,
      className,
    },
    hover: {
      name: "date_range",
      theme: MATERIAL_UI_THEME.twotone,
      className,
    },
  },
  clear: {
    normal: {
      name: "backspace",
      theme: MATERIAL_UI_THEME.outlined,
    },
    hover: {
      name: "backspace",
      theme: MATERIAL_UI_THEME.filled,
    },
  },
};

export default CALENDAR_ICON;
