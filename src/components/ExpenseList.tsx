import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseList = () => {
  const { state } = useContext(BudgetContext);
  const { expenses, filterCategoryId } = state;
  const isExpensesEmpty = expenses.length === 0;
  const expensedFiltered = filterCategoryId ? expenses.filter(expense => expense.category === filterCategoryId) : expenses;

  return (
    <section className="w-11/12 max-w-4xl mx-auto pb-20">
      <h2 className="mb-8 text-center text-4xl font-bold text-gray-600">Lista de Gastos</h2>

      {
        isExpensesEmpty

          ? <p className="text-center text-lg font-semibold text-gray-400">No hay gastos registrados</p>
          : <>
            {
              expensedFiltered.map(expense =>
                <ExpenseDetails
                  key={expense.id}
                  expense={expense}
                />
              )
            }
          </>
      }
    </section>
  )
}

export default ExpenseList