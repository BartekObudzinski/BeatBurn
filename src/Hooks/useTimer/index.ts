import { UseTimerValues } from '@Hooks/useTimer/types';
import { useEffect, useState } from 'react';

export const useTimer = (): UseTimerValues => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleTimer = () => {
    setIsRunning(!isRunning);
  };

  const clearTimer = () => {
    setTimer(0);
    setIsRunning(false);
  };

  const convertTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours < 10 ? '0' : ''}${hours}:${
      minutes < 10 ? '0' : ''
    }${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const time = convertTime(timer);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer(timer => timer + 1);
      }, 1000);
    } else if (!isRunning) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return {
    time,
    isRunning,
    handleTimer,
    clearTimer,
  };
};
