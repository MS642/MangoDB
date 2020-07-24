export const sumMangos = (mangoTransactions) => {
  if (mangoTransactions) {
    return mangoTransactions.reduce((acc, curr) => {
      return acc + curr.mangoCount;
    }, 0);
  }
  return 0;
};

export const addMangoTransaction = (
  mangoTransactions,
  user_id,
  mangoAmount
) => {
  // TODO implement
  return [...mangoTransactions, { user_id, mangoAmount }];
};
