import React, { useState, useEffect } from 'react';

function CountdownTimer({ targetDate }) {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer); // Clean up the interval on component unmount
    }, [targetDate]);

    return (
        <div>
            <h1>Countdown Timer</h1>
            {timeLeft.days !== undefined ? (
                <div>
                    <p>{timeLeft.days} Days</p>
                    <p>{timeLeft.hours} Hours</p>
                    <p>{timeLeft.minutes} Minutes</p>
                    <p>{timeLeft.seconds} Seconds</p>
                </div>
            ) : (
                <p>Time's up!</p>
            )}
        </div>
    );
}

export default CountdownTimer;
