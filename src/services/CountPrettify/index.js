const BILLION = 1000000000;
const MILLION = 1000000;
const THOUSAND = 1000;

export const countPrettify = (count) => {
  if (count > BILLION) return `${Math.floor(count / BILLION)}B`;
  if (count > MILLION) return `${Math.floor(count / MILLION)}M`;
  if (count > THOUSAND) return `${Math.floor(count / THOUSAND)}K`;

  return count;
};

export default countPrettify();
