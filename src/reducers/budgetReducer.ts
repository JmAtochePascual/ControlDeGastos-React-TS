import { TExpense } from "../types";

// Actions
export type BudgetAction =
  { type: "add-budget"; payload: number } |
  { type: "add-expense"; payload: TExpense } |
  { type: "delete-expense"; payload: string } |
  { type: "set-editId"; payload: TExpense['id'] } |
  { type: "show-modal"; }

// Initial State
export type BudgetState = {
  budget: number;
  expenses: TExpense[];
  editId: TExpense['id'];
  isModalOpen: boolean;
}

export const initialBudgetState: BudgetState = {
  budget: Number(localStorage.getItem("budget")) || 0,
  expenses: [],
  editId: "",
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
    return { ...state, expenses: [...state.expenses, action.payload], isModalOpen: !state.isModalOpen }
  }

  if (action.type === "set-editId") {
    return { ...state, editId: action.payload }
  }

  if (action.type === "delete-expense") {
    return { ...state, expenses: state.expenses.filter(expense => expense.id !== action.payload) }
  }

  return state;
}