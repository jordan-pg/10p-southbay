import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import { Typography, Box } from "@mui/material";

const QRCodeComponent = ({ code, type }: { code: string; type: string }) => {
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

		generateQR(code);
	}, []);

	return (
		<>
			{type === "complaints" && (
				<Typography fontWeight="bold" variant="h2" color="white" mb={6}>
					Concerns & Complaints
				</Typography>
			)}
			<Box
				flexDirection="row"
				display={type === 'complaints' ? "block" :  'flex'}
				alignItems="center"
				height={type === 'complaints' ? "50vh" :  100}
			>
				<Typography fontWeight="bold" variant="h5" color="white" mr={2}>
					{type === "feedback" && "Give us feedback!"}
				</Typography>
				{qrCodeURL && (
					<img
						src={qrCodeURL}
						style={{
							maxWidth: "100%",
							height: "100%",
						}}
					/>
				)}
			</Box>
		</>
	);
};

export default QRCodeComponent;
