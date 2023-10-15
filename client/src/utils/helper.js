import { VAT, SHIPPING_FEE } from "./constant";

export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export const grandTotalPrice = (totalCartPrice) => {
  const vat = VAT * +totalCartPrice;

  return vat + +totalCartPrice + SHIPPING_FEE;
};
