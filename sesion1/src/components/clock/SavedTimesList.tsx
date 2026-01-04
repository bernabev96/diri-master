import React from "react";
import SavedTimeItem from "./SavedTimeItem";

type SavedTimesListProps = {
    items: string[];
};

const SavedTimesList: React.FC<SavedTimesListProps> = ({ items }) => {
    return (
        <div className="space-y-2">
            <h3 className="font-semibold">Listado de horas guardadas:</h3>
            {items.length === 0 ? (
                <p className="text-sm opacity-70">No hay horas guardadas todavía.</p>
            ) : (
                <ol className="list-decimal pl-5 space-y-1">
                    {items.map((time, index) => (
                        <SavedTimeItem key={`${time}-${index}`} index={index} value={time}/>
                    ))}
                </ol>
            )}
        </div>
    );
};

export default SavedTimesList;