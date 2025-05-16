import { useContext } from "react"
import { BudgetContext } from "../context/BudgetContext";

// Tercero se Crea el custom hook para consumir el contexto
export const useBudget = () => {
  const context = useContext(BudgetContext);

  if (!context) {
    throw new Error("useBudget must be used within a BudgetProvider");
  };

  return context;
};