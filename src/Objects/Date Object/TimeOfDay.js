import React, { useState } from 'react';

const TimeOfDay = () => {
  const [currentHour] = useState(new Date().getHours());
  const [timeOfDay, setTimeOfDay] = useState('');

  const getTimeOfDay = (hour) => {
    if (hour >= 0 && hour < 6) {
      return "Night";
    } else if (hour >= 6 && hour < 12) {
      return "Morning";
    } else if (hour >= 12 && hour < 18) {
      return "Afternoon";
    } else {
      return "Evening";
    }
  };

  React.useEffect(() => {
    setTimeOfDay(getTimeOfDay(currentHour));
  }, [currentHour]);

  return (
    <div>
      <h2>Time of the Day</h2>
      <p>It's currently {timeOfDay}.</p>
    </div>
  );
};

export default TimeOfDay;
