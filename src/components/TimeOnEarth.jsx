
import React, { useState, useEffect } from 'react';

const TimeOnEarth = () => {
    const [seconds, setSeconds] = useState(0);
    const birthDate = new Date("2000-01-01"); // Default date, can be updated from data.js

    useEffect(() => {
        const calculateSeconds = () => {
            const now = new Date();
            const diff = Math.floor((now.getTime() - birthDate.getTime()) / 1000);
            setSeconds(diff);
        };

        calculateSeconds();
        const interval = setInterval(calculateSeconds, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-center py-10">
            <h3 className="text-2xl font-bold font-mono text-neutral-100">
                {seconds.toLocaleString()}
            </h3>
            <p className="text-sm text-neutral-500 mt-2">
                seconds spent figuring things out, breaking code, and rebuilding with intent.
            </p>
        </div>
    );
};

export default TimeOnEarth;
