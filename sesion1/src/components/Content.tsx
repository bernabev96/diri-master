import React from "react";

const Content: React.FC = () => {
    return (
        <div className="content divide-y">
          <div className="line"></div>
          <div className="item flex items-start gap-3 px-4 py-3">
            <div className="avatar">
              <img alt="Francisca" src="/images/francisca.jpg" className="w-10 h-10 rounded-full object-cover"/>
            </div>
            <span className="time block text-xs text-gray-400">Hace una hora</span>
            <p className="text-sm">Fui a comer con amigos</p>
          </div>
          <div className="item flex items-start gap-3 px-4 py-3">
            <div className="avatar">
              <img alt="Paco" src="/images/paco.jpg" className="w-10 h-10 rounded-full object-cover"/>
            </div>
            <span className="time block text-xs text-gray-400">10:00 am</span>
            <p className="text-sm">Leí un artículo sobre tecnología</p>
          </div>
          <div className="item flex items-start gap-3 px-4 py-3">
            <div className="avatar">
              <img alt="Quica" src="/images/quica.jpg" className="w-10 h-10 rounded-full object-cover"/>
            </div>
            <span className="time block text-xs text-gray-400">10:00 am</span>
            <p className="text-sm">Escribí notas sobre un proyecto importante</p>
          </div>
          <div className="item flex items-start gap-3 px-4 py-3">
            <div className="avatar">
              <img alt="Curro" src="/images/curro.jpg" className="w-10 h-10 rounded-full object-cover"/>
            </div>
            <span className="time block text-xs text-gray-400">2:21 pm</span>
            <p className="text-sm">Preparé la presentación para la reunión de mañana</p>
          </div>
        </div>
    )
}

export default Content;