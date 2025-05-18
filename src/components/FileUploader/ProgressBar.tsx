// Progress Bar Component using Tailwind
const ProgressBar = ({ progress = 0 }) => {
  // Ensure progress is between 0 and 100
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className="w-full flex items-center gap-3">
      <div
        className="w-full rounded-lg"
        style={{
          backgroundColor: "#FFF6ED",
          height: "8px",
          borderRadius: "8px",
        }}
      >
        <div
          className="h-full rounded-lg transition-all duration-300 ease-in-out"
          style={{
            width: `${clampedProgress}%`,
            backgroundColor: "#EC4A0A",
            borderRadius: "8px",
          }}
        />
      </div>
      <span className="text-sm-medium text-gray-700">{progress}%</span>
    </div>
  );
};

export default ProgressBar;
