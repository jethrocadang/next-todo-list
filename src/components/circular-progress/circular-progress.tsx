import React from "react";
import "./style.css";

interface CircularProgressBarProps {
  percentage: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  percentage,
}) => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="progress-wrapper" >
      <svg
        className="progress-circle"
        width="160"
        height="160"
        viewBox="0 0 160 160"
      >
        <circle
          className="progress-circle-bg"
          cx="80"
          cy="80"
          r={radius}
          strokeWidth="15"
        />
        <circle
          className="progress-circle-fg"
          cx="80"
          cy="80"
          r={radius}
          strokeWidth="15"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"

        />
      </svg>
      <div className="progress-text">{percentage}%</div>
    </div>
  );
};

export default CircularProgressBar;
