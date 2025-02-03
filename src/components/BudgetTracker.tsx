import AmountDisplay from "./AmountDisplay"

const BudgetTracker = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 ">
      <div className="flex justify-center items-center">
        <img
          src="grafico.jpg"
          alt="Imagen del tracker de gasto"
          className="max-w-60" />
      </div>

      <div className="">
        <button className="w-full mb-8 p-2 font-bold uppercase rounded-md text-white bg-pink-600 hover:bg-pink-700">
          resetear app
        </button>

        <div className="space-y-4">
          <AmountDisplay
            label="Presupuesto"
            amount={1000}
          />
          <AmountDisplay
            label="Disponible"
            amount={600}
          />
          <AmountDisplay
            label="Gastado"
            amount={400}
          />
        </div>
      </div>
    </div>
  )
}

export default BudgetTracker