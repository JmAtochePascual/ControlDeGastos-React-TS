// Actions
export type BudgetAction =
  { type: "add-budget"; payload: number } |
  { type: "show-modal"; }

// Initial State
export type BudgetState = {
  budget: number;
  isModalOpen: boolean;
}

export const initialBudgetState: BudgetState = {
  budget: Number(localStorage.getItem("budget")) || 0,
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


  return state;
}