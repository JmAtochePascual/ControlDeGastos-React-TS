// Convert a quantity to currency USD format
export const formatCurrency = (quantity: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(quantity);
}