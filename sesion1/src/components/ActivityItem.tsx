import React from "react";

type ActivityItemProps = {
    valorAlt: string;
    nombreImagen: string;
    time: string;
    text: string;
};

const ActivityItem: React.FC<ActivityItemProps> = ({ valorAlt, nombreImagen, time, text }) => {
    return (
        <div className="item flex items-start gap-3 px-4 py-3">
            <div className="avatar">
                <img alt={valorAlt} src={`/images/${nombreImagen}.jpg`} className="w-10 h-10 rounded-full object-cover"/>
            </div>
            <span className="time block text-xs text-gray-400">{time}</span>
            <p className="text-sm">{text}</p>
        </div>
    );
};

export default ActivityItem;