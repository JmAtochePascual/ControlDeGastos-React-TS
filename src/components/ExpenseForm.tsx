import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent, useContext, useEffect, useState } from "react"
import { categories } from "../data/categories"
import { INITIAL_EXPENSE } from "../data/expense"
import { TExpense } from "../types";
import { BudgetContext } from "../context/BudgetContext";

const ExpenseForm = () => {
  const { state, dispatch } = useContext(BudgetContext);
  const { editId, expenses } = state;
  const [expense, setExpense] = useState<TExpense>(INITIAL_EXPENSE);
  const isExpenseValid = [expense.name, expense.amount, expense.category, expense.date].every(Boolean) && expense.amount > 0;

  useEffect(() => {
    if (editId) {
      const expenseToEdit = expenses.filter(expense => expense.id === editId)[0];
      setExpense(expenseToEdit);
    }
  }, [editId, expenses]);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setExpense({ ...expense, [event.target.name]: event.target.name === "amount" ? +event.target.value : event.target.value })
  }

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (editId) {
      dispatch({ type: "edit-expense", payload: { ...expense, id: editId } });
    } else {
      dispatch({ type: "add-expense", payload: { ...expense, id: uuidv4() } });
    }

    setExpense(INITIAL_EXPENSE);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4">
      <legend className="uppercase text-2xl font-bold text-center border-b-2 border-blue-600">
        {editId ? "Editar Gasto" : "Nuevo Gasto"}
      </legend>

      <div>
        <label
          htmlFor="name"
          className="mb-1 block font-bold text-gray-700">
          Nombre Gasto:
        </label>

        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Añade el nombre del gasto"
          value={expense.name}
          onChange={handleChange}
          className="w-full p-2 block border border-gray-300 rounded-md outline-none" />
      </div>

      <div>
        <label
          htmlFor="amount"
          className="mb-1 block font-bold text-gray-700">
          Cantidad:
        </label>

        <input
          type="number"
          name="amount"
          id="amount"
          min={1}
          required
          placeholder="Añade la cantidad del gasto Ej. 100"
          value={expense.amount}
          onChange={handleChange}
          className="w-full p-2 block border border-gray-300 rounded-md outline-none" />
      </div>

      <div>
        <label
          htmlFor="category"
          className="mb-1 block font-bold text-gray-700">
          Categoria:
        </label>

        <select
          name="category"
          id="category"
          required
          value={expense.category}
          onChange={handleChange}
          className="w-full p-2 block border text-center border-gray-300 rounded-md outline-none">
          <option value="">-- Seleccione una categoría --</option>

          {
            categories.map((category) =>
              <option
                key={category.id}
                value={category.id}>
                {category.name}
              </option>
            )
          }
        </select>
      </div>

      <div>
        <label
          htmlFor="date"
          className="mb-1 block font-bold text-gray-700">
          Fecha:
        </label>

        <input
          type="date"
          name="date"
          id="date"
          required
          placeholder="Añade la cantidad del gasto Ej. 100"
          value={expense.date}
          onChange={handleChange}
          className="w-full p-2 block border border-gray-300 rounded-md outline-none" />
      </div>

      <input
        type="submit"
        value={editId ? "Guardar Cambios" : "Añadir Gasto"}
        disabled={!isExpenseValid}
        className="w-full p-2 bg-blue-600 text-white font-bold uppercase rounded-md cursor-pointer hover:bg-blue-700 disabled:opacity-35 disabled:cursor-not-allowed" />
    </form>
  )
}

export default ExpenseForm