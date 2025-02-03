import { categories } from "../data/categories"

const ExpenseForm = () => {
  return (
    <form className="space-y-4">
      <legend className="uppercase text-2xl font-bold text-center border-b-2 border-blue-600">
        Nuevo Gasto
      </legend>

      <div>
        <label
          htmlFor="name"
          className="mb-1 block font-bold text-gray-700">
          Nombre Gasto:
        </label>

        <input
          type="text"
          name="name"
          id="name"
          placeholder="Añade el nombre del gasto"
          className="w-full p-2 block border border-gray-300 rounded-md outline-none" />
      </div>

      <div>
        <label
          htmlFor="amount"
          className="mb-1 block font-bold text-gray-700">
          Cantidad:
        </label>

        <input
          type="number"
          name="amount"
          id="amount"
          placeholder="Añade la cantidad del gasto Ej. 100"
          className="w-full p-2 block border border-gray-300 rounded-md outline-none" />
      </div>

      <div>
        <label
          htmlFor="category"
          className="mb-1 block font-bold text-gray-700">
          Categoria:
        </label>

        <select
          name="category"
          id="category"
          className="w-full p-2 block border text-center border-gray-300 rounded-md outline-none">
          <option value="">-- Seleccione una categoría --</option>

          {
            categories.map((category) =>
              <option
                key={category.id}
                value={category.id}>
                {category.name}
              </option>
            )
          }
        </select>
      </div>

      <div>
        <label
          htmlFor="date"
          className="mb-1 block font-bold text-gray-700">
          Fecha:
        </label>

        <input
          type="date"
          name="date"
          id="date"
          placeholder="Añade la cantidad del gasto Ej. 100"
          className="w-full p-2 block border border-gray-300 rounded-md outline-none" />
      </div>

      <input
        type="submit"
        value="Registrar Gasto"
        className="w-full p-2 bg-blue-600 text-white font-bold uppercase rounded-md cursor-pointer hover:bg-blue-700" />
    </form>
  )
}

export default ExpenseForm