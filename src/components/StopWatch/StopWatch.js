import React, { useState, useEffect, useRef, useCallback } from "react";

const Stopwatch = ({ id, timer }) => {
    const savedTime = localStorage.getItem(`elapsedTime_${id}`);
    const savedRunning = localStorage.getItem(`running_${id}`) === "true";
    const lastUpdateTime = localStorage.getItem(`lastUpdateTime_${id}`);

    const [elapsedTime, setElapsedTime] = useState(savedTime ? parseInt(savedTime, 10) : timer);
    const [running, setRunning] = useState(savedRunning);
    const [lastUpdate, setLastUpdate] = useState(lastUpdateTime ? parseInt(lastUpdateTime, 10) : Date.now());

    const animationFrameId = useRef(null);

    const runStopwatch = useCallback(() => {
        animationFrameId.current = requestAnimationFrame(() => {
            const now = Date.now();
            const newElapsedTime = elapsedTime - (now - lastUpdate);

            if (newElapsedTime > 0) {
                setElapsedTime(newElapsedTime);
                setLastUpdate(now);
                localStorage.setItem(`elapsedTime_${id}`, newElapsedTime);
                localStorage.setItem(`lastUpdateTime_${id}`, now);
                runStopwatch();
            } else {
                stopStopwatch();
                setElapsedTime(timer);
                localStorage.removeItem(`elapsedTime_${id}`);
            }
        });
    }, [elapsedTime, lastUpdate, id, timer]);

    useEffect(() => {
        if (running) {
            runStopwatch();
        }
        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [running, runStopwatch]);

    const startStopwatch = () => {
        if (running) return;

        const now = Date.now();
        setRunning(true);
        setLastUpdate(now);
        localStorage.setItem(`running_${id}`, true);
        localStorage.setItem(`lastUpdateTime_${id}`, now);
        runStopwatch();
    };

    const stopStopwatch = useCallback(() => {
        if (animationFrameId.current) {
            cancelAnimationFrame(animationFrameId.current);
        }
        setRunning(false);
        localStorage.setItem(`running_${id}`, false);
    }, [id]);

    const updateStopwatchDisplay = () => {
        const totalSeconds = Math.floor(elapsedTime / 1000);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        const format = (num) => (num < 10 ? `0${num}` : num);
        return `${format(minutes)}:${format(seconds)}`;
    };

    return (
        <div>
            <button onClick={startStopwatch} className="icon icon-play"></button>
            <button onClick={stopStopwatch} className="icon icon-pause"></button>
            {updateStopwatchDisplay()}
        </div>
    );
};

export default Stopwatch;
