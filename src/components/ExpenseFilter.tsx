import { ChangeEvent, useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";
import { categories } from "../data/categories"

const ExpenseFilter = () => {
  const { dispatch } = useContext(BudgetContext);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "set-filterCategory", payload: event.target.value });
  }

  return (
    <section className="w-11/12 max-w-4xl mx-auto mb-10 p-8 rounded-md shadow-md bg-white md:p-10">
      <form className="flex flex-col gap-1 md:items-center md:flex-row md:gap-2">
        <label
          htmlFor="category"
          className="block font-bold text-gray-700">
          Categoría:
        </label>

        <select
          name="category"
          id="category"
          onChange={handleChange}
          className="w-full p-2 block border text-center border-gray-300 rounded-md outline-none">
          <option value="">-- Todas las Categorias --</option>
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
      </form>
    </section>
  )
}

export default ExpenseFilter