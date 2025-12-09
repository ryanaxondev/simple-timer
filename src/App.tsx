import { useRef, useState, useEffect } from "react";
import TimerDisplay from "./components/TimerDisplay";
import TimerControls from "./components/TimerControls";

const App: React.FC = () => {
  const intervalRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null); // timestamp دقیق

  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Start / Pause
  const toggleTimer = () => {
    setIsRunning((prev) => {
      const next = !prev;

      if (next) {
        // Starting  
        startTimeRef.current = Date.now() - seconds * 1000;

        if (!intervalRef.current) {
          intervalRef.current = window.setInterval(() => {
            if (startTimeRef.current !== null) {
              const elapsedMs = Date.now() - startTimeRef.current;
              setSeconds(Math.floor(elapsedMs / 1000));
            }
          }, 100);
        }
      } else {
        // Pausing
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      }

      return next;
    });
  };

  // Reset
  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    startTimeRef.current = null;
    setSeconds(0);
    setIsRunning(false);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-gray-100 rounded-xl shadow-lg text-center">
      <TimerDisplay seconds={seconds} />
      <TimerControls
        isRunning={isRunning}
        onToggle={toggleTimer}
        onReset={resetTimer}
      />
    </div>
  );
};

export default App;
