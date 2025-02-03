import { TExpense } from "../types";

// Actions
export type BudgetAction =
  { type: "add-budget"; payload: number } |
  { type: "add-expense"; payload: TExpense } |
  { type: "show-modal"; }

// Initial State
export type BudgetState = {
  budget: number;
  expenses: TExpense[];
  isModalOpen: boolean;
}

export const initialBudgetState: BudgetState = {
  budget: Number(localStorage.getItem("budget")) || 0,
  expenses: [],
  isModalOpen: false,
}

// Reducer
export const budgetReducer = (state: BudgetState, action: BudgetAction) => {

  if (action.type === "add-budget") {
    return { ...state, budget: action.payload }
  }

  if (action.type === "show-modal") {
    return { ...state, isModalOpen: !state.isModalOpen }
  }

  if (action.type === "add-expense") {
    return { ...state, expenses: [...state.expenses, action.payload] }
  }


  return state;
}