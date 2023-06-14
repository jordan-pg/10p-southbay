import { Typography, Button, Box } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import { useTimer } from "react-timer-hook";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface TimerComponentProps {
  autoStart: boolean;
}

const TimerComponent: React.FC<TimerComponentProps> = ({ autoStart }) => {
  const [loop, setLoop] = useState(false);
  const [loopedTimer, setLoopedTimer] = useState(false);
  const [timeToAdd, setTimeToAdd] = useState(5); // Set initial state to 5
  const [delaySeconds, setDelaySeconds] = useState(20); // Set initial delay to 20 seconds
  const [isDelayed, setIsDelayed] = useState(false);

  const formatTime = (value: number) => {
    return value.toString().padStart(2, "0");
  };

  const handleToggleTimer = () => {
    if (isRunning) {
      pause();
    } else {
      resume();
    }
  };

  const handleResetTimer = () => {
    const currentTime = new Date().getTime();
    const updatedExpiryTimestamp = currentTime + timeToAdd * 60000;
    const time = new Date(updatedExpiryTimestamp);
    restart(time);
    pause();
  };

  const handleToggleLoop = () => {
    setLoop(!loop);
  };

  const handleAddMinutes = () => {
    const currentTime = new Date().getTime();
    setTimeToAdd(timeToAdd + 1);
    const updatedExpiryTimestamp = currentTime + (timeToAdd + 1) * 60000;
    const time = new Date(updatedExpiryTimestamp);
    restart(time);
    pause();
  };

  const handleSubtractMinutes = () => {
    if (!isRunning && timeToAdd > 0) {
      const currentTime = new Date().getTime();
      setTimeToAdd(timeToAdd - 1);
      const updatedExpiryTimestamp =
        currentTime + (timeToAdd - 1) * 60000;
      const time = new Date(updatedExpiryTimestamp);
      restart(time);
      pause();
    }
  };

  const currentTime = new Date().getTime();
  const expiryTimestamp = currentTime + timeToAdd * 60000;
  const timerRef = useRef<number | null>(null);

  const {
    seconds,
    minutes,
    hours,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: new Date(expiryTimestamp),
    autoStart,
    onExpire: () => {
      console.warn("onExpire called");
      setIsDelayed(loop || loopedTimer); // Use `loop` or `loopedTimer` for delay display
      if (loop || loopedTimer) { // Start loop if either `loop` or `loopedTimer` is true
        timerRef.current = setTimeout(() => {
          setLoopedTimer(true); // Set loopedTimer state to true
          handleResetTimer();
          start();
        }, delaySeconds * 1000);
      }
    },
  });

  useEffect(() => {
    if ((loop || loopedTimer) && !isRunning) { // Start loop if either `loop` or `loopedTimer` is true
      setDelaySeconds(20);
      timerRef.current = setTimeout(() => {
        setLoopedTimer(true); // Set loopedTimer state to true
        handleResetTimer();
        start();
      }, delaySeconds * 1000);
    }

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [loop, loopedTimer, isRunning]);

  return (
    <div style={{ textAlign: "center", color: "white" }}>
      <Typography variant="h5" fontWeight="bold">
        Timer
      </Typography>
      <div
        style={{
          fontSize: "100px",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#242424", // Set background color
          borderRadius: "8px", // Add border radius
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "0 10px",
          }}
        >
          <span style={{ fontSize: "100px", color: "#fff" }}>
            {formatTime(hours)}
          </span>
          <span style={{ fontSize: "12px", color: "#fff" }}>hours</span>
        </div>
        <span style={{ fontSize: "100px", margin: "0 10px", color: "#fff" }}>
          :
        </span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "0 10px",
          }}
        >
          <span style={{ fontSize: "100px", color: "#fff" }}>
            {formatTime(minutes)}
          </span>
          <span style={{ fontSize: "12px", color: "#fff" }}>minutes</span>
        </div>
        <span style={{ fontSize: "100px", margin: "0 10px", color: "#fff" }}>
          :
        </span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "0 10px",
          }}
        >
          <span style={{ fontSize: "100px", color: "#fff" }}>
            {isDelayed ? formatTime(delaySeconds) : formatTime(seconds)}
          </span>
          <span style={{ fontSize: "12px", color: "#fff" }}>seconds</span>
        </div>
      </div>
      <Box marginTop={2}>
        <Button
          variant="contained"
          onClick={handleToggleTimer}
          style={{ marginRight: "8px" }}
        >
          {isRunning ? "Pause" : "Start"}
        </Button>
        <Button
          variant="contained"
          onClick={handleResetTimer}
          style={{ marginRight: "8px" }}
        >
          Reset
        </Button>
      </Box>
      <Box marginTop={2}>
        <Button
          variant="text"
          startIcon={<AddIcon />}
          onClick={handleAddMinutes}
          disabled={isRunning}
          style={{ marginRight: "8px" }}
        >
          Minute
        </Button>
        <Button
          variant="text"
          startIcon={<RemoveIcon />}
          onClick={handleSubtractMinutes}
          disabled={isRunning}
          style={{ marginRight: "8px" }}
        >
          Minute
        </Button>
        <Button
          disabled={isRunning}
          variant="text"
          onClick={handleToggleLoop}
          style={{ marginRight: "8px" }}
        >
          {loop ? "Disable Loop" : "Enable Loop"}
        </Button>
      </Box>
    </div>
  );
};

export default TimerComponent;
