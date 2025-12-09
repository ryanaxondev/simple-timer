import { useRef, useEffect } from "react";

interface TimerControlsProps {
  isRunning: boolean;
  onToggle: () => void;
  onReset: () => void;
}

const TimerControls: React.FC<TimerControlsProps> = ({
  isRunning,
  onToggle,
  onReset,
}) => {
  const startButtonRef = useRef<HTMLButtonElement | null>(null);

  // Auto-focus Start button on mount
  useEffect(() => {
    if (startButtonRef.current) {
      startButtonRef.current.focus();
    }
  }, []);

  // Focus Start button whenever timer becomes paused or reset
  useEffect(() => {
    if (!isRunning && startButtonRef.current) {
      startButtonRef.current.focus();
    }
  }, [isRunning]);

  return (
    <div className="flex flex-col gap-3 mt-6">
      <button
        ref={startButtonRef}
        onClick={onToggle}
        className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
      >
        {isRunning ? "Pause" : "Start"}
      </button>

      <button
        onClick={onReset}
        className="bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
      >
        Reset
      </button>
    </div>
  );
};

export default TimerControls;
