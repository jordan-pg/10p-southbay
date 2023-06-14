import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import { styled } from "@mui/system";
import { Typography, Grid } from "@mui/material";

const Container = styled("div")({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	paddingTop: "2rem",
});

const QRCodeComponent: React.FC = () => {
	const [qrCodeURL, setQRCodeURL] = useState("");

	useEffect(() => {
		const generateQR = async (text: string) => {
			try {
				const url = await QRCode.toDataURL(text);
				setQRCodeURL(url);
			} catch (err) {
				console.error(err);
			}
		};

		generateQR(
			"https://docs.google.com/forms/d/e/1FAIpQLSevPx4j8fYeqxPSr_K4UMKPaDj7cMskIyn0xNlV-exzfCoDVg/viewform"
		);
	}, []);

	return (
		<Container>
			<Grid
				container
				alignItems="center"
				justifyContent="center"
				spacing={8}
                marginTop={1}
			>
				<Grid item>
					<Typography fontWeight="bold" variant="h5" color="white">
						Leave a review
					</Typography>
				</Grid>
				{qrCodeURL && (
					<Grid item>
						<img
							src={qrCodeURL}
							alt="QR Code"
							style={{
								maxWidth: "100%",
								maxHeight: "calc(100vh - 64px - 4rem)",
							}}
						/>
					</Grid>
				)}
			</Grid>
		</Container>
	);
};

export default QRCodeComponent;
