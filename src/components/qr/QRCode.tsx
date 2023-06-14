import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import { styled } from "@mui/system";
import { Typography, Grid, Box } from "@mui/material";

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
		<>
			<Box flexDirection="row" display="flex" alignItems="center">
				<Typography fontWeight="bold" variant="h5" color="white" mr={2}>
					Give us feedback!
				</Typography>
				{qrCodeURL && (
					<img
						src={qrCodeURL}
						alt="QR Code"
						style={{
							maxWidth: "100%",
							maxHeight: 100,
						}}
					/>
				)}
			</Box>
		</>
	);
};

export default QRCodeComponent;
