'use client';

import { useEffect, useState } from 'react';

export default function Title() {
  const [currentTxt, setCurrentTxt] = useState(0);
  const txt = ['Laburar', 'Avanzar', 'Brillar'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTxt((prev) => (prev + 1) % txt.length);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <h2 className='text-6xl flex justify-center items-center flex-wrap font-bold tracking-tight text-white sm:text-9xl font-inter w-full px-2'>
      {txt.map((text, index) => (
        <span
          key={index}
          className={`block relative p-2 ${
            currentTxt === index ? 'transition-all color-styled' : 'text-white'
          }`}
        >
          {text}
        </span>
      ))}
    </h2>
  );
}
