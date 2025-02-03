import { useContext, useEffect } from "react";
import BudgetForm from "./components/BudgetForm"
import { BudgetContext } from "./context/BudgetContext";
import ExpenseContainer from "./components/ExpenseContainer";

function App() {
  const { state } = useContext(BudgetContext);
  const { budget } = state;

  useEffect(() => {
    localStorage.setItem("budget", JSON.stringify(budget));
  }, [budget])

  return (
    <>
      <header className="mb-8 py-8 bg-blue-600">
        <h1 className="uppercase text-center text-3xl font-bold text-white">
          Planificador de Gastos
        </h1>
      </header>

      <main>
        {
          budget
            ? <ExpenseContainer />
            : <BudgetForm />
        }
      </main>
    </>
  )
}

export default App
