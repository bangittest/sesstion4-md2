import React, { useRef, useState } from 'react'

export default function Index12() {
  const [start, setStart] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  const handleStart = () => {
    setStart(Date.now());
    setNow(Date.now());
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }
  const handleStop = () => {
    clearInterval(intervalRef.current);
  }

  let seconds = 0;
  if (start !== null && now !== null) {
    seconds = (now - start) / 1000;
  }

  return (
    <div>
      <h1>Đếm thời gian : {seconds.toFixed(3)}</h1>
      <button className='btn btn-success m-3' onClick={handleStart}>Bắt đầu</button>
      <button className='btn btn-warning' onClick={handleStop}>Dừng</button>
    </div>
  )
}