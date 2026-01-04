import React from "react";

type ClockDisplayProps = {
    date: Date;
};

const ClockDisplay: React.FC<ClockDisplayProps> = ({ date }) => {
    const hh = String(date.getHours()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');
    const ss = String(date.getSeconds()).padStart(2, '0');
    return (
        <div className="text-center text-3xl font-mono">
            {hh}:{mm}:{ss}
        </div>
    );
};

export default ClockDisplay;