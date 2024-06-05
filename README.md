# Search Component with Pagination in React and TailwindCSS

This repository contains an advanced search component implemented in React, accompanied by a pagination feature to efficiently split and display data. The design and appearance of the component are managed with TailwindCSS, enabling quick customization and a modern, responsive user experience.

## Features

- **Dynamic Search**: Allows users to search data in real-time with automatically updated results.
- **Efficient Pagination**: Data is divided into pages, enhancing load speed and navigation.
- **Responsive Interface**: Adapted to function seamlessly on devices of various sizes, thanks to TailwindCSS.
- **Easy Integration**: Can be easily integrated into any React project.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TailwindCSS**: CSS framework for quick and efficient design.
- **React Hooks**: Usage of `useState` and `useEffect` for state management and side effects.

## Installation and Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/Lui5-99/search-pagination-js
   ```
2. Navigate to the project directory:
   ```bash
   cd search-pagination-js
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the application:
   ```bash
   npm start
   ```

## Example Code

```jsx
import { useEffect, useState } from "react";
import { Search, Pagination } from "./Components";
import { db } from "./data";

const Principal = () => {
  const [dataSearch, setDataSearch] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    setDataSearch(db);
  }, []);

  return (
    <div className="w-2/3 flex flex-col  mx-auto gap-y-10 my-10">
      <Search state={db} setState={setDataSearch} />
      <div className="w-full flex justify-center">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Id</th>
              <th className="border px-4 py-2">Nombre</th>
              <th className="border px-4 py-2">Precio</th>
              <th className="border px-4 py-2">Stock</th>
              <th className="border px-4 py-2">Categoría</th>
            </tr>
          </thead>
          <tbody>
            {records.map((producto) => (
              <tr key={producto.Id}>
                <td className="border px-4 py-2">{producto.Id}</td>
                <td className="border px-4 py-2">{producto.Nombre}</td>
                <td className="border px-4 py-2">{producto.Precio}</td>
                <td className="border px-4 py-2">{producto.Stock}</td>
                <td className="border px-4 py-2">{producto.Categoria}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination data={dataSearch} setRecords={setRecords} />
    </div>
  );
};

export default Principal;
```
