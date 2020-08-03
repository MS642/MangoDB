export const unixTimestampToDate = (unixTimestamp) => {
  return new Date(unixTimestamp);
};

export const isToday = (unixTimestamp) => {
  const date = unixTimestampToDate(unixTimestamp);
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

export const isThisWeek = (unixTimestamp) => {
  const date = unixTimestampToDate(unixTimestamp);
  const today = new Date();
  const weekFromToday = new Date(today);
  weekFromToday.setDate(weekFromToday.getDate() + 7);

  return unixTimestamp && date <= weekFromToday;
};

export const isOverdue = (unixTimestamp) => {
  const now = new Date().getTime();
  return unixTimestamp && !isToday(unixTimestamp) && unixTimestamp < now;
};

export const unixTimestampToMinutes = (ts) => {
  return ts / (60 * 1000);
};

export const getMinuteDifference = (tsBefore, tsAfter) => {
  return unixTimestampToMinutes(tsAfter - tsBefore);
};
