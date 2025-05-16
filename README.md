# Control de Gasto

Control de Gasto es una aplicación web diseñada para ayudar a los usuarios a administrar sus gastos de manera efectiva. Ofrece la capacidad de establecer un presupuesto y registrar gastos, lo que permite a los usuarios llevar un seguimiento detallado de sus finanzas y tomar decisiones informadas sobre sus gastos futuros.

## Características

- **Registro de Gastos**: Permite a los usuarios agregar gastos, especificando la cantidad, categoría y fecha.
- **Cálculo de Presupuesto**: Muestra el presupuesto total, el gasto realizado y el saldo disponible.
- **Interfaz Responsiva**: Asegura que la aplicación se vea bien en dispositivos de diferentes tamaños.
- **Persistencia de Datos**: Utiliza `localStorage` para mantener el registro de gastos incluso después de recargar la página.
- **Manejo de Estado**: Utiliza `useReducer` para gestionar el estado de los gastos de manera eficiente.
- **Filtrado de Gastos**: Permite a los usuarios filtrar los gastos por categoría.
- **Despliegue Automático**: Facilita el acceso a la aplicación en línea a través de GitHub Pages.

## Tecnologías

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

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

## Estructura del Proyecto

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

## Instalación

> Para trabajar con este proyecto, necesitarás tener instalado:
>
> - **Node.js** (versión 14 o superior)

## Uso

Para visualizar el proyecto localmente, sigue estos pasos:

1. Clona este repositorio:

```
git clone https://github.com/JMatochePascual/ControlDeGastos-React-TS.git
```

2. Navega al directorio del proyecto:

```
cd ControlDeGastos-React-TS
```

3. Instala las dependencias necesarias:

```
npm install
```

4. Inicia el servidor en modo desarrollo:

```
npm run dev
```

## Contribución

Si deseas contribuir al proyecto, por favor sigue estos pasos en orden:

1. Haz un fork del repositorio

2. Crea una nueva rama para tu funcionalidad:
   ```bash
   git checkout -b feature-name
   ```
3. Realiza y confirma tus cambios:
   ```bash
   git commit -am 'Add new feature'
   ```
4. Sube los cambios a tu repositorio:
   ```bash
   git push origin feature-name
   ```
5. Abre un Pull Request desde tu repositorio hacia el proyecto principal

## Licencia

Este proyecto se encuentra disponible bajo la licencia MIT. Puedes consultar los términos completos [aquí](https://opensource.org/licenses/MIT).

Desarrollado con 💚 por JMCode | © 2025 - Transformando ideas en soluciones digitales.
