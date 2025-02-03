import { useContext, useEffect } from "react";
import BudgetForm from "./components/BudgetForm"
import { BudgetContext } from "./context/BudgetContext";

function App() {
  const { state } = useContext(BudgetContext);

  useEffect(() => {
    localStorage.setItem("budget", JSON.stringify(state.budget));
  }, [state.budget])

  return (
    <>
      <header className="mb-8 py-8 bg-blue-600">
        <h1 className="uppercase text-center text-3xl font-bold text-white">
          Planificador de Gastos
        </h1>
      </header>

      <section className="w-11/12 max-w-5xl mx-auto p-10 rounded-md shadow-md bg-white">
        <BudgetForm />
      </section>
    </>
  )
}

export default App
