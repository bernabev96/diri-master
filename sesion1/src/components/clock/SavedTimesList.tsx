import React from "react";
import SavedTimeItem from "./SavedTimeItem";

type SavedTimesListProps = {
    items: number[];
    formatItem: (ts: number) => string;
    onDelete: (ts: number) => void;
};

const SavedTimesList: React.FC<SavedTimesListProps> = ({ items, formatItem, onDelete }) => {
    return (
        <div className="space-y-2">
            <h3 className="font-semibold">Listado de horas guardadas:</h3>
            {items.length === 0 ? (
                <p className="text-sm opacity-70">No hay horas guardadas todavía.</p>
            ) : (
                <ol className="list-decimal list-inside space-y-2">
                    {items.map((ts) => (
                        <SavedTimeItem key={ts} value={ts} label={formatItem(ts)} onDelete={onDelete} />
                    ))}
                </ol>
            )}
        </div>
    );
};

export default SavedTimesList;