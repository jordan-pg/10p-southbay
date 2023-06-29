import { Typography, Button, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { styled } from "@mui/system";

const TimerContainer = styled("div")`
	text-align: center;
	color: white;
`;

const TimerDisplay = styled(Box)`
	font-size: 120px;
	display: flex;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.7);
	border-radius: 8px;
	padding: 0px;
`;

const TimerBlock = styled("div")`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 10px;
`;

const TimerNumber = styled("span")`
	font-size: 24rem;
	font-weight: bold;
	color: #fff;
	line-height: 21rem;

	@media (max-width: 1068px) {
		font-size: 18rem;
	}
`;

const TimerLabel = styled("span")`
	font-size: 48px;
	color: #fff;
`;

const ResponsiveTimerDisplay = styled(TimerDisplay)`
	@media (max-width: 768px) {
		padding: 20px;
		font-size: 18rem;
	}
`;

const ResponsiveTimerBlock = styled(TimerBlock)`
	@media (max-width: 768px) {
		margin: 10px 0;
	}
`;

const TimerHeader = styled(Typography)`
	font-size: 72px;

	@media (max-width: 1068px) {
		font-size: 64px;
	}
`;

interface TimerComponentProps {
	autoStart: boolean;
}

const TimerComponent: React.FC<TimerComponentProps> = ({ autoStart }) => {
	const [loop, setLoop] = useState(false);
	const [loopedTimer, setLoopedTimer] = useState(false);
	const [timeToAdd, setTimeToAdd] = useState(5); // Set initial state to 5
	const [catEffect, setCatEffect] = useState(false);

	const formatTime = (value: number) => {
		return value.toString().padStart(2, "0");
	};

	const handleToggleTimer = () => {
		if (isRunning) {
			pause();
		} else {
			resume();
			const audio = new Audio();
			audio.src = catEffect ? "/cat.mp3" : "/bell.mp3";
			audio.autoplay = true;
			audio.play();
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

	const { seconds, minutes, isRunning, start, pause, resume, restart } =
		useTimer({
			expiryTimestamp: new Date(expiryTimestamp),
			autoStart,
			onExpire: () => {
				const audio = new Audio();
				audio.src = "/bell.mp3";
				audio.autoplay = true;
				const currentTime = new Date().getTime();
				const updatedExpiryTimestamp = currentTime + timeToAdd * 60000;
				const time = new Date(updatedExpiryTimestamp);

				audio.play();
				if (loop) {
					if (!loopedTimer) {
						const t = new Date();
						t.setSeconds(t.getSeconds() + 60);
						setLoopedTimer(true);
						return restart(t);
					} else {
						setLoopedTimer(false);
						return restart(time);
					}
				}
				return restart(time);
			},
		});

	useEffect(() => {
		if (loop) {
			resume();
		}
	}, [loopedTimer]);

	useEffect(() => {
		if (isRunning && loopedTimer && seconds === 5) {
			const audio = new Audio();
			audio.src = "/countdown.mp3";
			audio.autoplay = true;
			audio.play();
		}
		if (isRunning && !loopedTimer && minutes === 0 && seconds === 10) {
			const audio = new Audio();
			audio.src = "/wood_clap.mp3";
			audio.autoplay = true;
			audio.play();
		}
	}, [seconds]);

	return (
		<TimerContainer>
			<TimerHeader variant="h5" fontWeight="bold" mt={2}>
				{loop && !isRunning && "TIMER"}
				{loop && loopedTimer && isRunning && "FIND A PARTNER"}
				{loop && !loopedTimer && isRunning && "ROUND IN PROGRESS"}
				{!loop && "TIMER"}
			</TimerHeader>
			<ResponsiveTimerDisplay>
				<ResponsiveTimerBlock>
					<TimerNumber>{formatTime(minutes)}</TimerNumber>
					<TimerLabel>minutes</TimerLabel>
				</ResponsiveTimerBlock>
				<span style={{ alignSelf: "center", fontWeight: "bold" }}>
					:
				</span>
				<ResponsiveTimerBlock>
					<TimerNumber>{formatTime(seconds)}</TimerNumber>
					<TimerLabel>seconds</TimerLabel>
				</ResponsiveTimerBlock>
			</ResponsiveTimerDisplay>
			<Box pt={6}>
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
				<Button
					disabled={isRunning}
					variant="text"
					onClick={() => setCatEffect(!catEffect)}
					style={{ marginRight: "8px" }}
				>
					{catEffect ? "UFC Sound" : "Panther Sound"}
				</Button>
			</Box>
		</TimerContainer>
	);
};

export default TimerComponent;
