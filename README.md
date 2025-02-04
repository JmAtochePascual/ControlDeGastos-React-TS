# ⚡️ Control de Gasto

Control de Gasto es una aplicación web diseñada para ayudar a los usuarios a administrar sus gastos de manera efectiva. Ofrece la capacidad de establecer un presupuesto y registrar gastos, lo que permite a los usuarios llevar un seguimiento detallado de sus finanzas y tomar decisiones informadas sobre sus gastos futuros.

## 🛠️ Tecnologías Utilizadas

- **React**: Framework principal para la construcción de la interfaz de usuario
- **TypeScript**: Lenguaje de programación que agrega tipado estático a JavaScript
- **Vite**: Herramienta de compilación que ofrece un entorno de desarrollo más rápido
- **TailwindCSS**: Framework para los estilos del proyecto
- **LocalStorage**: Para persistir el estado del carrito de compras
- **ESLint**: Para mantener la calidad y consistencia del código
- **Git**: Sistema de control de versiones
- **GitHub Pages**: Para el despliegue de la aplicación
- **Reducer**: Para gestionar el estado global del carrito de compras de manera eficiente
- **ContextAPI**: Para proporcionar un estado global accesible en toda la aplicación
- **Custom Hooks**: Para reutilizar lógica específica y mantener el código más limpio y modular

## 📁 Estructura del Proyecto

- **src/**: Contiene el código fuente de la aplicación.
  - **components/**: Componentes reutilizables que forman la interfaz de usuario.
    - `BudgetTracker.tsx`: Componente que muestra el presupuesto y el estado de los gastos.
    - `ExpenseContainer.tsx`: Contenedor que agrupa los componentes relacionados con los gastos.
    - `ExpenseDetails.tsx`: Componente que muestra los detalles de un gasto individual.
    - `ExpenseFilter.tsx`: Componente que permite filtrar los gastos por categoría.
    - `ExpenseForm.tsx`: Componente para agregar o editar un gasto.
    - `ExpenseList.tsx`: Componente que muestra la lista de gastos.
    - `ExpenseModal.tsx`: Componente que muestra un modal para agregar o editar un gasto.
    - `Error.tsx`: Componente para mostrar mensajes de error.
    - `AmountDisplay.tsx`: Componente para mostrar cantidades monetarias.
  - **hooks/**: Contiene hooks personalizados que encapsulan la lógica de la aplicación.
    - `useOrder.ts`: Hook personalizado para la lógica de la orden (si aplica).
  - **data/**: Archivos que contienen datos estáticos utilizados en la aplicación.
    - `categories.ts`: Define las categorías de actividades (comida y ejercicio) y el estado inicial de una actividad.
    - `expense.ts`: Define el estado inicial de un gasto.
  - **types/**: Tipos y interfaces compartidos que definen la estructura de los datos.
    - `index.ts`: Tipos y interfaces utilizados en toda la aplicación.
  - **reducers/**: Contiene la lógica de gestión del estado de las actividades.
    - `budgetReducer.ts`: Reducer que maneja las acciones relacionadas con el presupuesto y los gastos.
  - `App.tsx`: Componente principal que integra todos los componentes y gestiona el estado global.

## 🚀 Características Principales

- **Registro de Gastos**: Permite a los usuarios agregar gastos, especificando la cantidad, categoría y fecha.
- **Cálculo de Presupuesto**: Muestra el presupuesto total, el gasto realizado y el saldo disponible.
- **Interfaz Responsiva**: Asegura que la aplicación se vea bien en dispositivos de diferentes tamaños.
- **Persistencia de Datos**: Utiliza `localStorage` para mantener el registro de gastos incluso después de recargar la página.
- **Manejo de Estado**: Utiliza `useReducer` para gestionar el estado de los gastos de manera eficiente.
- **Filtrado de Gastos**: Permite a los usuarios filtrar los gastos por categoría.
- **Despliegue Automático**: Facilita el acceso a la aplicación en línea a través de GitHub Pages.

## 🛠️ Instalación y Uso

1. Clona el repositorio:

   ```bash
   git clone https://github.com/JMatochePascual/ControlDeGastos-React-TS.git
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre tu navegador en:
   ```bash
   http://localhost:5173
   ```

## 🤝 Contribución

Si deseas contribuir al proyecto, sigue estos pasos:

1. Haz un Fork del repositorio:

   ```bash
   git remote add upstream https://github.com/JMatochePascual/ControlDeGastos-React-TS.git
   ```

2. Crea una nueva rama:

   ```bash
   git checkout -b feature/nueva-caracteristica
   ```

3. Realiza tus cambios y haz commit:

   ```bash
   git add .
   git commit -m "Agrega nueva característica"
   ```

4. Sube los cambios a tu Fork:

   ```bash
   git push origin feature/nueva-caracteristica
   ```

5. Abre un Pull Request desde tu repositorio al repositorio original.

Por favor, antes de realizar cambios importantes:

- Abre un Issue para discutir las modificaciones propuestas.
- Asegúrate de que tu código sigue las convenciones del proyecto.
- Incluye tests si es necesario.
- Actualiza la documentación según corresponda.

## 📝 Licencia

Este proyecto está bajo la licencia [MIT](https://opensource.org/licenses/MIT).

<p style="text-align: center">Hecho con 💚 por JMCode | ©2025 - Transformando ideas en realidad.</p>
