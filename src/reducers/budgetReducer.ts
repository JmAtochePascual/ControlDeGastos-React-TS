// Actions
export type BudgetAction =
  { type: "add-budget"; payload: number }

// Initial State
export type BudgetState = {
  budget: number;
}

export const initialBudgetState: BudgetState = {
  budget: Number(localStorage.getItem("budget")) || 0
}

// Reducer
export const budgetReducer = (state: BudgetState, action: BudgetAction) => {

  if (action.type === "add-budget") {
    return { ...state, budget: action.payload }
  }


  return state;
}