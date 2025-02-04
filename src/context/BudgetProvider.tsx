import { useReducer, ReactNode } from "react"
import { budgetReducer, initialBudgetState } from "../reducers/budgetReducer";
import { BudgetContext } from "./BudgetContext";

type BudgetProviderProps = {
  children: ReactNode;
}
// Segundo se Crea el Provider
const BudgetProvider = ({ children }: BudgetProviderProps) => {
  const [state, dispatch] = useReducer(budgetReducer, initialBudgetState);
  const gastado = state.expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const disponible = state.budget - gastado;

  return (
    <BudgetContext.Provider
      value={{ state, dispatch, gastado, disponible }}>
      {children}
    </BudgetContext.Provider>
  )
}

export default BudgetProvider