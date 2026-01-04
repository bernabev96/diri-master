import React, { useEffect, useState } from "react";
import ClockDisplay from "./ClockDisplay";
import SavedTimesList from "./SavedTimesList";

const ClockPage: React.FC = () => {
    const [currentTime, setCurrentTime] = useState<Date>(new Date());
    const [savedTimes, setSavedTimes] = useState<string[]>([]);

    //actualizmos el reloj cada segundo
    useEffect(() => {
        const timerId = window.setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => window.clearInterval(timerId);
    }, []);

    const handleSaveTime = () => {
        const hh = String(currentTime.getHours()).padStart(2, '0');
        const mm = String(currentTime.getMinutes()).padStart(2, '0');
        const ss = String(currentTime.getSeconds()).padStart(2, '0');
        const timeString = `${hh}:${mm}:${ss}`;
        setSavedTimes((prev) => [...prev, timeString]);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <div className="w-full max-w-md border p-6 space-y-6">
                <h2 className="text-xl font-semibold">Reloj</h2>
                <ClockDisplay date={currentTime} />
                <button type="button" onClick={handleSaveTime} className="w-full border px-4 py-2">Guardar hora actual</button>
                <SavedTimesList items={savedTimes} />
            </div>
        </div>
    );
};

export default ClockPage;