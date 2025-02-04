import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";
import AmountDisplay from "./AmountDisplay"

const BudgetTracker = () => {
  const { state } = useContext(BudgetContext);
  const { budget, expenses } = state;
  const gastado = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const disponible = budget - gastado;

  return (
    <section className="w-11/12 max-w-4xl mx-auto mb-10 p-8 rounded-md shadow-md bg-white md:p-10">
      <div className="grid gap-4 md:grid-cols-2 ">
        <div className="flex justify-center items-center">
          <img
            src="grafico.jpg"
            alt="Imagen del tracker de gasto"
            className="w-full max-w-60" />
        </div>

        <div className="">
          <button className="w-full mb-8 p-2 font-bold uppercase rounded-md text-white bg-pink-600 hover:bg-pink-700">
            resetear app
          </button>

          <div className="space-y-4">
            <AmountDisplay
              label="Presupuesto"
              amount={budget}
            />
            <AmountDisplay
              label="Disponible"
              amount={disponible}
            />
            <AmountDisplay
              label="Gastado"
              amount={gastado}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BudgetTracker