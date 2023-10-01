import { useState, useEffect } from 'react';
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
    if (!time) {
      return "00";
    }

    return String(time).padStart(2, '0');
  };

  return (
    <div className={classes.holder}>
      <p className={classes.timeDescriptor}>Auction Ends in:</p>
      <div className={classes.timer}>
        {/*<div className={classes.days}>
          {timeLeft.days && <span>{formatTime(timeLeft.days)}</span>}
          <span className={classes.timeDescriptor}>days</span>
        </div>*/}
        <div className={classes.hours}>
        <span className={classes.number}>{formatTime(timeLeft.hours)}</span>
          <span className={classes.timeDescriptor}>Hours</span>
        </div>
        <div className={classes.spacer}>:</div>
        <div className={classes.minutes}>
        <span className={classes.number}>{formatTime(timeLeft.minutes)}</span>
          <span className={classes.timeDescriptor}>Minutes</span>
        </div>
        <div className={classes.spacer}>:</div>
        <div className={classes.seconds}>
        <span className={classes.number}>{formatTime(timeLeft.seconds)}</span>
          <span className={classes.timeDescriptor}>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;

/* 
<span className={classes.number}>{formatTime(timeLeft.hours)}</span>
 <span className={classes.number}>{formatTime(timeLeft.minutes)}</span>
 <span className={classes.number}>{formatTime(timeLeft.seconds)}</span>
*/