import MATERIAL_UI_THEME from "../MATERIAL_UI_THEME";

const className = "task-icon";

const TASK_ICON = {
  done: {
    normal: {
      name: "check_circle",
      theme: MATERIAL_UI_THEME.filled,
      className,
    },
    hover: {
      name: "check_circle",
      theme: MATERIAL_UI_THEME.outlined,
      className,
    },
  },
  notDone: {
    normal: {
      name: "radio_button_unchecked",
      theme: MATERIAL_UI_THEME.filled,
      className,
    },
    hover: {
      name: "check_circle",
      theme: MATERIAL_UI_THEME.outlined,
      className,
    },
  },
  public: {
    normal: {
      name: "visibility",
      theme: MATERIAL_UI_THEME.filled,
      className,
    },
    hover: {
      name: "visibility_",
      theme: MATERIAL_UI_THEME.outlined,
      className,
    },
  },
  private: {
    normal: {
      name: "visibility_off",
      theme: MATERIAL_UI_THEME.filled,
      className,
    },
    hover: {
      name: "visibility_off",
      theme: MATERIAL_UI_THEME.outlined,
      className,
    },
  },
};

export default TASK_ICON;
