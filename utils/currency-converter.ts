export const currencyConverter = (amount: number) => {
  const CURRENCY_CONVERTER = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return CURRENCY_CONVERTER.format(amount);
};
