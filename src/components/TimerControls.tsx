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
  return (
    <div className="flex flex-col gap-3 mt-6">
      <button
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
