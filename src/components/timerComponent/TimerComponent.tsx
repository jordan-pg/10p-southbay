import { Typography, Button, Box } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import { useTimer } from "react-timer-hook";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { styled } from "@mui/system";

const TimerContainer = styled("div")`
	text-align: center;
	color: white;
`;

const TimerDisplay = styled("div")`
	font-size: 100px;
	display: flex;
	justify-content: center;
	background-color: #242424;
	border-radius: 8px;
	padding: 30px;
`;

const TimerBlock = styled("div")`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 10px;
`;

const TimerNumber = styled("span")`
	font-size: 200px;
	color: #fff;
`;

const TimerLabel = styled("span")`
	font-size: 24px;
	color: #fff;
`;

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
	const timerRef = useRef<any>(null);

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
			if (loop || loopedTimer) {
				// Start loop if either `loop` or `loopedTimer` is true
				timerRef.current = setTimeout(() => {
					setLoopedTimer(true); // Set loopedTimer state to true
					handleResetTimer();
					start();
				}, delaySeconds * 1000);
			}
		},
	});

	useEffect(() => {
		if ((loop || loopedTimer) && !isRunning) {
			// Start loop if either `loop` or `loopedTimer` is true
			setDelaySeconds(20);
			timerRef.current = setTimeout(() => {
				setLoopedTimer(true); // Set loopedTimer state to true
				handleResetTimer();
				start();
			}, delaySeconds * 1000);
		}

		return () => {
			clearTimeout(timerRef.current as any);
		};
	}, [loop, loopedTimer, isRunning]);

	return (
		<TimerContainer>
			<Typography variant="h5" fontWeight="bold" pb={3}>
				Timer
			</Typography>
			<TimerDisplay>
				<TimerBlock>
					<TimerNumber>{formatTime(hours)}</TimerNumber>
					<TimerLabel>hours</TimerLabel>
				</TimerBlock>
				<span style={{ alignSelf: "center" }}>:</span>
				<TimerBlock>
					<TimerNumber>{formatTime(minutes)}</TimerNumber>
					<TimerLabel>minutes</TimerLabel>
				</TimerBlock>
				<span style={{ alignSelf: "center" }}>:</span>
				<TimerBlock>
					<TimerNumber>
						{isDelayed
							? formatTime(delaySeconds)
							: formatTime(seconds)}
					</TimerNumber>
					<TimerLabel>seconds</TimerLabel>
				</TimerBlock>
			</TimerDisplay>
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
		</TimerContainer>
	);
};

export default TimerComponent;
