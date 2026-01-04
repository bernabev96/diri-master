import React from "react";

type HeaderProps  = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <div className="header flex px-4 py-3 border-b items-center">
          <div className="menuIcon relative w-8 h-6 shrink-0">
            <div className="dashTop absolute top-0 left-0 w-8 h-0.5 bg-gray-400"></div>
            <div className="dashMiddle absolute top-1/2 left-0 w-8 h-0.5 bg-gray-400 -translate-y-1/2"></div>
            <div className="dashBottom absolute bottom-0 left-0 w-8 h-0.5 bg-gray-400"></div>
          </div>
          <h2 className="text-lg font-semibold flex-1 text-center">{title}</h2>
          <div className="shrink-0">
            <input type="text" className="searchInput hidden"
            placeholder="Buscar ..." />
            <i className="fa fa-search text-gray-500"></i>
          </div>
        </div>
    )
}

export default Header;