import { createContext, Dispatch } from "react";
import { BudgetAction, BudgetState } from "../reducers/budgetReducer";

type BudgetContextProps = {
  state: BudgetState;
  dispatch: Dispatch<BudgetAction>;
}

// Primero se Crea el Contexto
export const BudgetContext = createContext<BudgetContextProps>(null!);