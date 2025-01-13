import React, { useState, useEffect } from 'react';

function EventScheduler() {
    const [eventDate, setEventDate] = useState('');
    const [timeLeft, setTimeLeft] = useState({});

    const calculateTimeLeft = (eventDate) => {
        console.log(eventDate)
        const difference = +new Date(eventDate) - +new Date();
        console.log(+new Date())
        console.log( difference)
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        console.log(timeLeft)
        

        return timeLeft;
    };

    useEffect(() => {
        const timer = setInterval(() => {
            if (eventDate) {
                setTimeLeft(calculateTimeLeft(eventDate));
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [eventDate]);

    const handleInputChange = (e) => {
        setEventDate(e.target.value);
    };

    return (
        <div>
            <h1>Event Scheduler</h1>
            <div>
                <label>
                    Event Date:
                    <input type="datetime-local" value={eventDate} onChange={handleInputChange} />
                </label>
            </div>
            {timeLeft.days !== undefined && (
                <div>
                    <p>{timeLeft.days} Days</p>
                    <p>{timeLeft.hours} Hours</p>
                    <p>{timeLeft.minutes} Minutes</p>
                    <p>{timeLeft.seconds} Seconds</p>
                </div>
            )}
        </div>
    );
}

export default EventScheduler;
