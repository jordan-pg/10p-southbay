import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/system";
import BackgroundVideo from "./BackgroundVideo";

const HeroSection = styled(Box)`
	text-align: center;
	height: 90vh;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	opacity: 0;
	animation: fade-in 1.5s ease-in-out forwards;
	animation-delay: 0.5s;

	@keyframes fade-in {
		0% {
			opacity: 0;
			transform: translateY(50px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
`;

const HeroHeader = styled(Typography)`
	font-weight: bold;
	margin-bottom: 20px;
	opacity: 0;
	animation: fade-in-text 1s ease-in-out forwards;
	animation-delay: 0.5s;

	@keyframes fade-in-text {
		0% {
			opacity: 0;
			transform: translateY(50px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
`;

const HeroSubtext = styled(Typography)`
	margin-bottom: 40px;
	opacity: 0;
	animation: fade-in-text 1s ease-in-out forwards;
	animation-delay: 1s;
`;

const HeroButton = styled(Button)`
	padding: 8px 18px;
	opacity: 0;
	animation: fade-in-button 1s ease-in-out forwards;
	animation-delay: 1.5s;

	@keyframes fade-in-button {
		0% {
			opacity: 0;
			transform: translateY(20px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
`;

const Home = () => {
	return (
		<HeroSection>
			<Container>
				<HeroHeader variant="h4">
					YOUR JIU-JITSU JOURNEY STARTS HERE
				</HeroHeader>
				<HeroSubtext variant="h6">
					Learn world-class jiu-jitsu at 10th Planet South Bay under
					PJ &quot;Butter Panther&quot; Barch
				</HeroSubtext>
				<HeroButton
					variant="contained"
					onClick={() =>
						window.open(
							"https://cp.mystudio.io/m/?=10PSBAY%252F10553%252F54044%252F%252F1684130926"
						)
					}
				>
					GET STARTED TODAY
				</HeroButton>
			</Container>
			<BackgroundVideo />
		</HeroSection>
	);
};

export default Home;
