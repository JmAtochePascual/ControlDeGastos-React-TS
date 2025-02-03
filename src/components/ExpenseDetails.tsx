import { categories } from "../data/categories";
import { TExpense } from "../types"
import { formatDate } from "../utils";
import AmountDisplay from "./AmountDisplay";

type TExpenseDetailsProps = {
  expense: TExpense
}

const ExpenseDetails = ({ expense }: TExpenseDetailsProps) => {
  const { name, amount, category, date } = expense;
  const categoryInfo = categories.filter(cat => cat.id === category)[0];

  return (
    <div className="p-4 flex flex-col border-b-2 border-slate-300 bg-white md:flex-row md:p-10 md:justify-between md:items-center">
      <div className="flex gap-4">
        <img
          src={`/icons/icono_${categoryInfo.icon}.svg`}
          alt=""
          className="w-12 md:w-20" />

        <div className="flex flex-col justify-between">
          <p className="uppercase font-bold text-gray-500">{categoryInfo.name}</p>

          <p className="font-bold">{name}</p>

          <p className="text-gray-500">{formatDate(date)}</p>
        </div>
      </div>

      <AmountDisplay
        amount={amount}
      />
    </div>
  )
}

export default ExpenseDetails