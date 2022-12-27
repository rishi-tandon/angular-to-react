export const currency = (number) => {
  return number.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });
};
