"use client";
import React from "react";
import theme from "@/components/theme/theme";
import { AppBar, Box, ThemeProvider, Toolbar, Typography } from "@mui/material";
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

const Complaints = () => {
	return (
		<ThemeProvider theme={theme}>
			<AppBar color="transparent" sx={{ boxShadow: "none" }}>
				<Toolbar
					sx={{
						justifyContent: "space-between",
						p: 1,
					}}
				>
					<Image
						src="/long_logo.png"
						alt="logo"
						width={280}
						height={80}
					/>
				</Toolbar>
			</AppBar>
			<PageContainer>
				<Toolbar />
				<ImageOverlay />
				<ImageBackground />
				<Box width="100%" height="100%">
					<Typography
						fontWeight="bold"
						variant="h2"
						color="white"
						mb={6}
					>
						Concerns & Complaints
					</Typography>
					<Image
						src="/qrcode.png"
						width={450}
						height={450}
						alt={"qr"}
					/>
				</Box>
			</PageContainer>
		</ThemeProvider>
	);
};

export default Complaints;
