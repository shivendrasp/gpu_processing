"use client";
import { useState, useEffect } from "react";
import { Frame01 } from "./frames/frame-01";
import { Frame02 } from "./frames/frame-02";
import { Frame03 } from "./frames/frame-03";
import { Frame04 } from "./frames/frame-04";
import { Frame05 } from "./frames/frame-05";
import { Frame06 } from "./frames/frame-06";
import { Frame07 } from "./frames/frame-07";

const frames = [Frame01, Frame02, Frame03, Frame04, Frame05, Frame06, Frame07];

const Display = () => {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrameIndex((prevIndex) => (prevIndex + 1) % frames.length);
    }, 60); // Change frame every 150ms

    return () => clearInterval(interval);
  }, []);

  const CurrentFrame = frames[currentFrameIndex];

  return (
    <div className="display-content">
      <div className="display">
        <CurrentFrame />
      </div>
    </div>
  );
};

export default Display;
