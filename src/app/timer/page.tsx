"use client";
import React from "react";
import QRCodeComponent from "@/components/qr/QRCode";
import theme from "@/components/theme/theme";
import TimerComponent from "@/components/timerComponent/TimerComponent";
import { Box, Grid, ThemeProvider } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";

const PageContainer = styled(Box)({
	position: "relative",
	minHeight: "100vh",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	padding: 0,
	textAlign: "center",
	backgroundColor: "black",
	zIndex: 0,
	margin: 0,
});

const ImageOverlay = styled(Box)({
	position: "absolute",
	top: 0,
	left: 0,
	width: "100%",
	height: "100%",
	backgroundColor: "rgba(0, 0, 0, 0.1)",
	zIndex: -1,
});

const ImageBackground = styled(Box)({
	position: "absolute",
	top: 0,
	left: 0,
	width: "100%",
	height: "100%",
	backgroundImage: "url('/10ppj2.png')",
	backgroundSize: "cover",
	backgroundPosition: "center",
	opacity: 0.5,
	zIndex: -2,
});

const LeftContainer = styled(Box)({
	textAlign: "center",
	padding: "2rem",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	zIndex: 1,
});

const RightContainer = styled(Box)({
	textAlign: "center",
	padding: "2rem",
	zIndex: 1,
});

const Toolbar = styled(Box)({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	padding: "1rem",
	position: "fixed",
	top: 0,
	left: 0,
	width: "100%",
	zIndex: 999,
	backgroundColor: "rgba(0, 0, 0, 0.7)",
	color: "white",
});

const Timer = () => {
	return (
		<ThemeProvider theme={theme}>
			<Box>
				<Toolbar>
					{" "}
					<Image src="/logo.png" alt="logo" width={70} height={50} />
				</Toolbar>
				<PageContainer>
					<ImageOverlay />
					<ImageBackground />
					<Box marginTop="4rem" width="100%" height="100%">
						<Grid container>
							<Grid item xs={12} md={6}>
								<LeftContainer>
									<iframe
										src="https://open.spotify.com/embed/playlist/2otQLmbi8QWHjDfq3eL0DC?utm_source=generator&theme=0"
										width="100%"
										height="552"
										frameBorder="0"
										allowFullScreen
										allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
										loading="lazy"
									></iframe>
								</LeftContainer>
							</Grid>
							<Grid item xs={12} md={6}>
								<RightContainer>
									<TimerComponent autoStart={false} />
									<QRCodeComponent />
								</RightContainer>
							</Grid>
						</Grid>
					</Box>
				</PageContainer>
			</Box>
		</ThemeProvider>
	);
};

export default Timer;
