"use client"
import { useEffect, useState } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourRotation = (hours + minutes / 60) * 30;
  const minuteRotation = (minutes + seconds / 60) * 6;
  const secondRotation = seconds * 6;

  return (
    <div className="text-black fill-black">
      <svg
        className="w-[40px] fill-black border border-black"
        viewBox=""
      >
        <circle
          className="text-gray-800"
          cx="50"
          cy="50"
          r="48"
          strokeWidth="2"
          fill="none"
        />

        <line
          x1="50"
          y1="50"
          x2="50"
          y2="30"
          transform={`rotate(${hourRotation} 50 50)`}
          className="text-blue-500"
          strokeWidth="4"
        />

        <line
          x1="50"
          y1="50"
          x2="50"
          y2="20"
          transform={`rotate(${minuteRotation} 50 50)`}
          className="text-blue-500"
          strokeWidth="2"
        />

        <line
          x1="50"
          y1="50"
          x2="50"
          y2="15"
          transform={`rotate(${secondRotation} 50 50)`}
          className="text-blue-500"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

export default Clock;
