export const range = (start: number, end: number) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export const percentageAmount = (percentage: number, total: number) => {
  return (percentage / 100) * total;
};
