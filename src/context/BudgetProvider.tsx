import { useReducer, ReactNode } from "react"
import { budgetReducer, initialBudgetState } from "../reducers/budgetReducer";
import { BudgetContext } from "./BudgetContext";

type BudgetProviderProps = {
  children: ReactNode;
}
// Segundo se Crea el Provider
const BudgetProvider = ({ children }: BudgetProviderProps) => {
  const [state, dispatch] = useReducer(budgetReducer, initialBudgetState);

  return (
    <BudgetContext.Provider value={{ state, dispatch }}>
      {children}
    </BudgetContext.Provider>
  )
}

export default BudgetProvider