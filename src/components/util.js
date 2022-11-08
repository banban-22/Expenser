export const currFormatter = new Intl.NumberFormat('en-CA', {
  currency: 'CAD',
  style: 'currency',
  currencyDisplay: 'code',
  minimumFractionDigits: 2,
});
