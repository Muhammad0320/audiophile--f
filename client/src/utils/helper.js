export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export const grandTotalPrice = (totalCartPrice) => {
  const shippingFee = 50;

  const vat = 0.2 * +totalCartPrice;

  return vat + +totalCartPrice + shippingFee;
};
