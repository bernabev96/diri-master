import React from "react";

type SavedTimeItemProps = {
    value: number;
    label: string;
    onDelete: (ts: number) => void;
};

const SavedTimeItem: React.FC<SavedTimeItemProps> = ({ value, label, onDelete }) => {
    return (
        <li className="flex items-center justify-between border px-3 py-2">
            <span className="font-mono">{label}</span>
            <button type="button" onClick={() => onDelete(value)} className="bg-red-600 text-white px-3 py-1 text-sm rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400">Borrar</button>
        </li>
    );
};

export default SavedTimeItem;