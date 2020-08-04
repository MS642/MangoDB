import React from "react";

const getIcon = (icon, isHover) => {
  if (icon) {
    const iconState = isHover ? icon.hover : icon.normal;
    if (iconState) {
      const { name, theme, className } = iconState;
      return <i className={`${theme} ${className}`}>{name}</i>;
    }
  }
  return <i />;
};

export default getIcon;
