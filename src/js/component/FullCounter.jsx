import React, { useEffect, useState, useRef } from "react";

function FullCounter() {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    const [isCountdown, setIsCountdown] = useState(false);
    const [targetTime, setTargetTime] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const intervalRef = useRef(null);

    useEffect(() => {
        startTimer();
        return stopTimer; // limpiar al desmontar
    }, []);

    useEffect(() => {
        if (targetTime !== null && seconds === targetTime) {
            alert(`⏰ ¡Has alcanzado el tiempo objetivo de ${targetTime} segundos!`);
        }
    }, [seconds, targetTime]);

    const startTimer = () => {
        intervalRef.current = setInterval(() => {
            setSeconds(prev =>
                isCountdown
                    ? (prev > 0 ? prev - 1 : 0)
                    : prev + 1
            );
        }, 1000);
    };

    const stopTimer = () => clearInterval(intervalRef.current);

    const handlePause = () => {
        setIsRunning(false);
        stopTimer();
    };

    const handleResume = () => {
        if (!isRunning) {
            setIsRunning(true);
            startTimer();
        }
    };

    const handleReset = () => {
        stopTimer();
        setSeconds(0);
        setIsRunning(false);
    };

    const handleCountdown = () => {
        stopTimer();
        const num = parseInt(inputValue);
        if (!isNaN(num)) {
            setSeconds(num);
            setIsCountdown(true);
            setIsRunning(true);
            startTimer();
        }
    };

    const handleTargetAlert = () => {
        const num = parseInt(inputValue);
        if (!isNaN(num)) setTargetTime(num);
    };

    return (
        <div className="container text-center mt-5">
            <h1>⏱ Full Counter</h1>
            <div className="display-3 bg-dark text-white p-4 rounded mb-4">
                {String(seconds).padStart(6, '0')}
            </div>

            <div className="mb-3">
                <input
                    type="number"
                    className="form-control"
                    placeholder="Ingresa segundos"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                />
            </div>

            <div className="btn-group">
                <button className="btn btn-success" onClick={handleResume}>▶️ Reanudar</button>
                <button className="btn btn-warning" onClick={handlePause}>⏸ Pausar</button>
                <button className="btn btn-danger" onClick={handleReset}>🔁 Reiniciar</button>
                <button className="btn btn-primary" onClick={handleCountdown}>⏳ Cuenta regresiva</button>
                <button className="btn btn-info" onClick={handleTargetAlert}>🔔 Establecer alerta</button>
            </div>
        </div>
    );
}

export default FullCounter;