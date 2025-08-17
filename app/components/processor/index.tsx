"use client";
import "./style.css";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import Chip from "@/app/assets/chip";
import Display from "@/app/assets/display";

function Processor() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const style = {
    variant01 : {
      id: 0,
      backgroundColor: "#d0d0d0",
      border: "1px solid #c2c2c2",
    },
    variant02 : {
      id: 1,
      backgroundColor: "#FA4848",
      border: "1px solid #F72D2D",
    },
  }
  const [on_off, setOnOff] = useState(style.variant01);
  useEffect(() => {
    const interval = setInterval(() => {
      setOnOff(on_off.id === 0 ? style.variant02 : style.variant01);
    }, 1000);
    return () => clearInterval(interval);
  }, [on_off]);
  return (
    <div className="container">
      <motion.div className="main-container">
        <div className="chip-container">
          <Chip />
          <div className="chip-container-light" style={on_off} />
        </div>
        <div className="data-flow-container">
          {arr.map((_, index) => (<div
          className="data-flow-item"
          key={index}
          >
            <motion.div 
            key={index}
            initial={{
              x: 0,
              scale: 0,
            }}
            animate={{
              x: 100,
              scale: [0, 1, 1, 1, 1, 0],
            }}
            transition={{
              delay: 0.69 * index,
              duration: 1 + 0.2 * index,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 0.2 * index * 0.2,

            }}
            style={{backgroundColor: index % 2 === 0 ? "#1AFF29" : "#FF7AF4", border: index % 2 === 0 ? "1px solid #00C40E" : "1px solid #D601C5"}}
            className="data-flow-token" />
          </div>))}
        </div>
        <div className="display-container">
          <Display />
        </div>
      </motion.div>
    </div>
  );
}

export default Processor;
