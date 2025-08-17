import { useState, useEffect } from "react";

const Display = () => {
  const gridSize = 16;
  const svgSize = 140;
  const spacing = svgSize / gridSize;
  const radius = spacing / 2.4;

  const [animationFrame, setAnimationFrame] = useState(0);

  // Animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationFrame((prev) => prev + 1);
    }, 60); // Update every 50ms for smooth animation

    return () => clearInterval(interval);
  }, []);

  // Function to check if a point should be visible based on wave animation
  const isInsideWave = (row: number, col: number, frame: number) => {
    // Wave parameters
    const waveSpeed = 0.4;
    const waveFrequency = 0.8;
    const waveAmplitude = 4;
    const waveThickness = 2;

    // Calculate the wave position at this column
    const waveY = gridSize / 2 + Math.sin((col * waveFrequency) + (frame * waveSpeed)) * waveAmplitude;

    // Check if the current row is within the wave thickness
    return Math.abs(row - waveY) <= waveThickness;
  };

  const circles = [];
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const cx = (col + 0.5) * spacing;
      const cy = (row + 0.5) * spacing;

      // Check if this dot should be visible (inside wave)
      const isVisible = isInsideWave(row, col, animationFrame);
      const opacity = isVisible ? 1 : 1;
      const fillColor = isVisible ? "#fff" : "none";

      circles.push(
        <circle
          key={`${row}-${col}`}
          cx={cx}
          cy={cy}
          r={radius}
          fill={fillColor}
          stroke="#cccccc"
          strokeWidth="1"
          opacity={opacity}
        />
      );
    }
  }

  return (
    <div className="display-content">
      <div className="display">
        <svg
          width="140"
          height="140"
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {circles}
        </svg>
      </div>
    </div>
  );
};

export default Display;
