import { ChangeEvent, FormEvent, useState } from "react"
import { useBudget } from "../hooks/useBudget";

const BudgetForm = () => {
  const { dispatch } = useBudget();
  const [budget, setBudget] = useState(0);
  const isNotValid = budget <= 0 || isNaN(budget);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBudget(+e.target.value);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({ type: "add-budget", payload: budget });
  }

  return (
    <div className="w-11/12 max-w-4xl mx-auto p-10 rounded-md shadow-md bg-white">
      <form
        onSubmit={handleSubmit}
        className="space-y-5">
        <div className="space-y-5">
          <label
            htmlFor="budget"
            className="block capitalize text-center font-bold text-4xl text-blue-600">
            Definir presupuesto
          </label>

          <input
            id="budget"
            name="budget"
            type="number"
            placeholder="Ej. 300"
            min={1}
            required
            value={budget}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 outline-none" />
        </div>

        <input
          type="submit"
          value="Definir presupuesto"
          disabled={isNotValid}
          className="w-full p-3 font-bold uppercase cursor-pointer text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-30 disabled:cursor-not-allowed md:text-xl" />
      </form>
    </div>
  )
}

export default BudgetForm