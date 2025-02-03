import BudgetTracker from "./BudgetTracker"
import ExpenseList from "./ExpenseList"
import ExpenseModal from "./ExpenseModal"

const ExpenseContainer = () => {

  return (
    <>
      <BudgetTracker />
      <ExpenseList />
      <ExpenseModal />
    </>
  )
}

export default ExpenseContainer