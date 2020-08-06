const BILLION = 1000000000;
const MILLION = 1000000;
const THOUSAND = 1000;

export const countPrettify = (count) => {
  if (count > BILLION) return `${(count / BILLION).toFixed(1)}B`;
  if (count > MILLION) return `${(count / MILLION).toFixed(1)}M`;
  if (count > THOUSAND) return `${(count / THOUSAND).toFixed(1)}K`;

  return count;
};

export default countPrettify();
