import { useRef, useState, useEffect } from "react";
import TimerDisplay from "./components/TimerDisplay";
import TimerControls from "./components/TimerControls";

const App: React.FC = () => {
  const intervalRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  // Load initial time from localStorage
  const [seconds, setSeconds] = useState<number>(() => {
    return Number(localStorage.getItem("seconds")) || 0;
  });

  const [isRunning, setIsRunning] = useState(false);

  // Start / Pause
  const toggleTimer = () => {
    setIsRunning((prev) => {
      const next = !prev;

      if (next) {
        // Start
        startTimeRef.current = Date.now() - seconds * 1000;

        if (!intervalRef.current) {
          intervalRef.current = window.setInterval(() => {
            if (startTimeRef.current !== null) {
              const elapsed = Date.now() - startTimeRef.current;
              setSeconds(Math.floor(elapsed / 1000));
            }
          }, 100);
        }
      } else {
        // Pause
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

    // Clear localStorage
    localStorage.removeItem("seconds");
  };

  // Save to localStorage on every update
  useEffect(() => {
    localStorage.setItem("seconds", String(seconds));
  }, [seconds]);

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
