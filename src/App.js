import React, { useState } from 'react';
import { Clock } from './components/Clock';
import { Button } from './components/Button';
import './App.css';

function App() {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });
  const [interval, setInterv] = useState(null);

  const start = () => {
    setInterv(setInterval(run, 10));
    run();
  }

  const stop = () => {
    clearInterval(interval);
    setTime({
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    });
  }

  const wait = () => { 
    clearInterval(interval);
  }

  const reset = () => {
    clearInterval(interval);
    setTime({
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    });
    start()
  }

  

  const run = () => {
    return setTime((time) => {
      let updatedHours = time.hours;
      let updatedMinutes = time.minutes;
      let updatedSeconds = time.seconds;
      let updatedMilliseconds = time.milliseconds;
      
      if (updatedMinutes === 60) {
        updatedHours++;
        updatedMinutes = 0;
      }
      if (updatedSeconds === 60) {
        updatedMinutes++;
        updatedSeconds = 0;
      }
      if (updatedMilliseconds === 100) {
        updatedSeconds++;
        updatedMilliseconds = 0;
      }
      updatedMilliseconds++;

      return {
        hours: updatedHours,
        minutes: updatedMinutes,
        seconds: updatedSeconds,
        milliseconds: updatedMilliseconds,
      }
    });
  }

  return (
    <div className="main">
      <div className="container">
        <Clock
          { ...time }
        />
        <Button
          btnName="Start"
          onClick={start}
        />
        <Button
          btnName="Stop"
          onClick={stop}
        />
        <Button
          btnName="Wait"
          onClick={wait}
        />
        <Button
          btnName="Reset"
          onClick={reset}
        />
      </div>
    </div>
  );
}

export default App;
