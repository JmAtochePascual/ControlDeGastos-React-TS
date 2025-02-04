import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

import { categories } from "../data/categories";
import { TExpense } from "../types"
import { formatDate } from "../utils";
import AmountDisplay from "./AmountDisplay";
import { BudgetContext } from '../context/BudgetContext';
import { useContext } from 'react';

type TExpenseDetailsProps = {
  expense: TExpense
}

const ExpenseDetails = ({ expense }: TExpenseDetailsProps) => {
  const { dispatch } = useContext(BudgetContext);
  const { name, amount, category, date, id } = expense;
  const categoryInfo = categories.filter(cat => cat.id === category)[0];


  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction
        onClick={() => dispatch({ type: "set-editId", payload: id })}>
        Editar
      </SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => dispatch({ type: "delete-expense", payload: id })}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}>
        <div className="w-full p-4 flex flex-col border-b-2 border-slate-300 bg-white md:flex-row md:p-10 md:justify-between md:items-center cursor-grab">
          <div className="flex gap-4">
            <img
              src={`icons/icono_${categoryInfo.icon}.svg`}
              alt=""
              className="w-12 md:w-20" />

            <div className="flex flex-col justify-between">
              <p className="inline-block uppercase font-bold text-gray-500">{categoryInfo.name}</p>

              <p className="inline-block font-bold">{name}</p>

              <p className="inline-block text-gray-500">{formatDate(date)}</p>
            </div>
          </div>

          <AmountDisplay
            amount={amount}
          />
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default ExpenseDetails