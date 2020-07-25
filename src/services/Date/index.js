export const unixTimestampToDate = (unixTimestamp) => {
  return new Date(unixTimestamp);
};

export const isToday = (unixTimestampDate) => {
  const date = unixTimestampToDate(unixTimestampDate);
  const today = new Date();

  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

export const isThisWeek = (unixTimestampDate) => {
  const date = unixTimestampToDate(unixTimestampDate);
  const today = new Date();
  const weekFromToday = new Date(today);
  weekFromToday.setDate(weekFromToday.getDate() + 7);

  return date <= weekFromToday;
};

export const isOverdue = () => {
  // const date = unixTimestampToDate(unixTimestampDate);
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  return false;
  // return !unixTimestampDate || date < now;
};
