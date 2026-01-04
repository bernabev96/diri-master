import React from "react";
import ActivityItem from "./ActivityItem";

const Content: React.FC = () => {
    return (
        <div className="content divide-y">
          <div className="line"></div>
          <ActivityItem valorAlt="Francisca" nombreImagen="francisca" time="Hace una hora" text="Fui a comer con amigos"/>
          <ActivityItem valorAlt="Paco" nombreImagen="paco" time="10:00 am" text="Leí un artículo sobre tecnología"/>
          <ActivityItem valorAlt="Quica" nombreImagen="quica" time="10:00 am" text="Escribí notas sobre un proyecto importante"/>
          <ActivityItem valorAlt="Curro" nombreImagen="curro" time="2:21 pm" text="Preparé la presentación para la reunión de mañana"/>
        </div>
    )
}

export default Content;