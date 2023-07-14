import React, { useState, useEffect } from 'react';
import classes from "./CountdownTimer.module.css";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const formatTime = (time) => {
    return String(time).padStart(2, '0');
  };

  return (
    <div className={classes.timer}>
      {timeLeft.days && <span>{formatTime(timeLeft.days)} days</span>}
      <span>{formatTime(timeLeft.hours)}:</span>
      <span>{formatTime(timeLeft.minutes)}:</span>
      <span>{formatTime(timeLeft.seconds)}</span>
    </div>
  );
};

export default CountdownTimer;