import React, { useEffect, useState } from "react";
import ClockDisplay from "./ClockDisplay";
import SavedTimesList from "./SavedTimesList";

const STORAGE_KEY = "instants";

function formatTimeFromTimestamp(ts: number): string {
    const d = new Date(ts);
    const hh = String(d.getHours()).padStart(2, '0');
    const mm = String(d.getMinutes()).padStart(2, '0');
    const ss = String(d.getSeconds()).padStart(2, '0');
    return `${hh}:${mm}:${ss}`;
}

function loadInstantsFromStorage(): number[] {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved){
        return [];
    }

    try {
        const parsed = JSON.parse(saved);
        //validación mínima para evitar errores cuando haya basura en el localStorage
        if (Array.isArray(parsed) && parsed.every(item => typeof item === 'number')) {
            return parsed;
        }
        return [];
    } catch {
        return [];
    }
}

const ClockPage: React.FC = () => {
    const [currentTime, setCurrentTime] = useState<Date>(new Date());
    const [instants, setInstants] = useState<number[]>(() => loadInstantsFromStorage()); //inicialización diferida
    //const [savedTimes, setSavedTimes] = useState<string[]>([]);

    //actualizmos el reloj cada segundo
    useEffect(() => {
        const timerId = window.setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => window.clearInterval(timerId);
    }, []);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(instants));
    }, [instants]);

    const handleSaveInstant = () => {
        setInstants((prev) => [...prev, Date.now()])
    };

    const handleDeleteInstant = (instantToDelete: number) => {
        setInstants((prev) => prev.filter((x) => x !== instantToDelete));
    };

    /*const handleSaveTime = () => {
        const hh = String(currentTime.getHours()).padStart(2, '0');
        const mm = String(currentTime.getMinutes()).padStart(2, '0');
        const ss = String(currentTime.getSeconds()).padStart(2, '0');
        const timeString = `${hh}:${mm}:${ss}`;
        setSavedTimes((prev) => [...prev, timeString]);
    };*/

    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <div className="w-full max-w-md border p-6 space-y-6">
                <h2 className="text-xl font-semibold">Reloj</h2>
                <ClockDisplay date={currentTime} />
                <button type="button" onClick={handleSaveInstant} className="w-full border px-4 py-2 bg-blue-500 text-white hover:bg-blue-700">Guardar hora actual</button>
                <SavedTimesList items={instants} formatItem={formatTimeFromTimestamp} onDelete={handleDeleteInstant} />
            </div>
        </div>
    );
};

export default ClockPage;