import { TExpense } from "../types"

type TExpenseDetailsProps = {
  expense: TExpense
}

const ExpenseDetails = ({ expense }: TExpenseDetailsProps) => {
  const { name, amount, category, date } = expense;

  return (
    <div className="p-4 border-b-2 border-slate-300 bg-white">
      <p className="text-lg font-semibold text-gray-600">{name}</p>

      <p className="text-gray-500">Cantidad: {amount}</p>

      <p className="text-gray-500">Categoria: {category}</p>

      <p className="text-gray-500">Fecha: {date}</p>
    </div>
  )
}

export default ExpenseDetails