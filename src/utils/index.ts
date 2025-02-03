import { TExpense } from "../types";

// Convert a quantity to currency USD format
export const formatCurrency = (quantity: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(quantity);
}
// Formatea la fecha a un formato legible completo
export const formatDate = (date: TExpense['date']) => {
  return new Intl.DateTimeFormat("es-ES", {
    dateStyle: "full"
  }).format(new Date(date));
}