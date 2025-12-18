import React from "react";

const Header: React.FC = () => {
    return (
        <div className="header flex flex-col gap-3 px-4 py-3 border-b sm:flex-row sm:items-center">
          <div className="menuIcon relative w-6 h-6">
            <div className="dashTop"></div>
            <div className="dashBottom"></div>
            <div className="circle"></div>
          </div>
          <h1 className="text-lg font-semibold sm:flex-1">Registro de Tareas</h1>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <input type="text" className="searchInput text-sm px-2 py-1 border rounded-md w-full sm:w-48 focus:outline-none focus:ring-1 focus:ring-blue-400"
            placeholder="Buscar ..." />
            <i className="fa fa-search text-gray-500"></i>
          </div>
        </div>
    )
}

export default Header;