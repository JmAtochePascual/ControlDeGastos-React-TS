import BudgetTracker from "./BudgetTracker"
import ExpenseFilter from "./ExpenseFilter"
import ExpenseList from "./ExpenseList"
import ExpenseModal from "./ExpenseModal"

const ExpenseContainer = () => {

  return (
    <>
      <BudgetTracker />
      <ExpenseFilter />
      <ExpenseList />
      <ExpenseModal />
    </>
  )
}

export default ExpenseContainer