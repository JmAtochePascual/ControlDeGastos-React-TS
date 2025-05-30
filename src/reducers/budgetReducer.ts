import { TCategory, TExpense } from "../types";

// Actions
export type BudgetAction =
  { type: "add-budget"; payload: number } |
  { type: "add-expense"; payload: TExpense } |
  { type: "edit-expense"; payload: TExpense } |
  { type: "delete-expense"; payload: string } |
  { type: "set-editId"; payload: TExpense['id'] } |
  { type: "set-filterCategory"; payload: TCategory['id'] } |
  { type: "reset-app" } |
  { type: "show-modal" } |
  { type: "hide-modal" }

// Initial State
export type BudgetState = {
  budget: number;
  expenses: TExpense[];
  editId: TExpense['id'];
  filterCategoryId: TCategory['id'];
  isModalOpen: boolean;
}

export const initialBudgetState: BudgetState = {
  budget: Number(localStorage.getItem("budget")) || 0,
  expenses: JSON.parse(localStorage.getItem("expenses")!) || [],
  editId: "",
  filterCategoryId: "",
  isModalOpen: false,
}

export const budgetReducer = (state: BudgetState, action: BudgetAction) => {

  if (action.type === "add-budget") {
    return { ...state, budget: action.payload };
  };

  if (action.type === "add-expense") {
    return { ...state, expenses: [...state.expenses, action.payload], isModalOpen: !state.isModalOpen }
  };

  if (action.type === "edit-expense") {
    return {
      ...state,
      expenses: state.expenses.map(expense => expense.id === action.payload.id ? action.payload : expense),
      isModalOpen: !state.isModalOpen,
      editId: ""
    };
  };

  if (action.type === "delete-expense") {
    return { ...state, expenses: state.expenses.filter(expense => expense.id !== action.payload) };
  };

  if (action.type === "set-editId") {
    return { ...state, editId: action.payload, isModalOpen: !state.isModalOpen };
  };

  if (action.type === "set-filterCategory") {
    return { ...state, filterCategoryId: action.payload };
  };

  if (action.type === "show-modal") {
    return { ...state, isModalOpen: true };
  };

  if (action.type === "hide-modal") {
    return { ...state, isModalOpen: false, editId: "" };
  };

  if (action.type === "reset-app") {
    return { budget: 0, expenses: [], editId: "", filterCategoryId: "", isModalOpen: false };
  };

  return state;
};