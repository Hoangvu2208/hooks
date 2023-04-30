import React from "react";
import { useState, useEffect } from "react";

const Timer = (props) => {
  const [timeLeft, setTimeLeft] = useState(props.seconds);

  useEffect(() => {
    if (timeLeft === 0) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);
  return (
    <div>
      <h2>Count down from {props.seconds}: <br /> 
      
      {timeLeft}</h2>
    </div>
  );
};

export default Timer;
