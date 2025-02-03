import { useContext } from 'react'
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { Dialog, DialogPanel } from '@headlessui/react'
import { BudgetContext } from '../context/BudgetContext'
import ExpenseForm from './ExpenseForm';

export default function ExpenseModal() {
  const { state, dispatch } = useContext(BudgetContext);
  const { isModalOpen } = state;

  return (
    <>
      <div className="fixed right-5 bottom-5 flex items-center justify-center">
        <button
          onClick={() => dispatch({ type: "show-modal" })}
          type="button">
          <PlusCircleIcon className='w-16 h-16 text-blue-600 rounded-full' />
        </button>
      </div>

      <Dialog
        open={isModalOpen}
        as="div"
        onClose={() => dispatch({ type: "show-modal" })}
        className="relative z-10 focus:outline-none">
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black bg-opacity-75">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-xl rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">

              <ExpenseForm />

            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}