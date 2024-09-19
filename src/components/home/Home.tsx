import React, { useEffect, useState } from "react";
import {
	Box,
	Typography,
	Button,
	Container,
	Alert,
	Snackbar,
} from "@mui/material";
import { styled } from "@mui/system";
import BackgroundVideo from "./BackgroundVideo";
import { ChevronRightRounded } from "@mui/icons-material";

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

const CustomLink = styled(Button)`
	padding: 8px 18px;
	opacity: 0;
	animation: fade-in-button 1s ease-in-out forwards;
	animation-delay: 1.5s;
	background-color: transparent;
	border: none;
	text-decoration: underline;

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
	&:hover {
		background-color: transparent;
		color: #26c0e2;
		text-decoration: underline #26c0e2;
	}
`;

const Home = () => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setOpen(true);
		}, 2500);
	}, []);

	return (
		<HeroSection>
			{/* <Snackbar
				open={open}
				onClose={() => setOpen(!open)}
				onClick={() =>
					window.open("https://smoothcomp.com/en/event/12947")
				}
			>
				<Alert
					onClose={() => setOpen(!open)}
					variant="filled"
					severity="info"
					sx={{
					alignItems: 'center',
						color: "white",
						backgroundColor: "rgba(38, 192, 226, .6)",
						border: "1px solid rgba(38, 192, 226)",
						mt: 6,
						cursor: 'pointer'
					}}
					action={<ChevronRightRounded />}
				>
					Sign up for the Duel in the Den! Kids, White and Blue Belts
					EBI rules tournament.
				</Alert>
			</Snackbar> */}
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
							"https://cp.mystudio.io/t/?=10PSBAY/10553/32174//1695175182"
						)
					}
				>
					TRY A CLASS FOR FREE
				</HeroButton>
				<Box mt={2}>
					<CustomLink
						onClick={() =>
							window.open(
								"https://cp.mystudio.io/t/?=10PSBAY/10553/33210//1696028856"
							)
						}
					>
						Open Mat Waiver
					</CustomLink>
				</Box>
			</Container>
			<BackgroundVideo />
		</HeroSection>
	);
};

export default Home;
