import { useContext, useEffect } from "react";
import { BudgetContext } from "./context/BudgetContext";
import { BudgetForm, ExpenseContainer } from "./components";

function App() {
  const { state } = useContext(BudgetContext);
  const { budget, expenses } = state;

  useEffect(() => {
    localStorage.setItem("budget", JSON.stringify(budget));
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses, budget]);

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

      <footer className='fixed w-full bottom-0 py-1 bg-blue-600'>
        <p className="p-4 text-center md:text-start text-white"> <span className="font-bold">JMCode</span> | ©2025 - Transformando ideas en realidad.</p>
      </footer>
    </>
  )
}

export default App
