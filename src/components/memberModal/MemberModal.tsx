import React, { useState } from "react";
import { Box, Typography, IconButton, Button, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import AppleIcon from "@mui/icons-material/Apple";
import ShopIcon from "@mui/icons-material/Shop";
import WebIcon from "@mui/icons-material/Web";

const MemberModal = () => {
	const [openModal, setOpenModal] = useState(false);

	const handleOpenModal = () => {
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	const handleCopyCode = () => {
		navigator.clipboard.writeText("10PSBAY").then(() => {
			alert("Copied!");
		});
	};

	return (
		<>
			<Button
				onClick={handleOpenModal}
				variant="contained"
				color="primary"
			>
				MEMBER LOGIN
			</Button>

			<Modal
				open={openModal}
				onClose={handleCloseModal}
				aria-labelledby="member-login-modal-title"
				aria-describedby="member-login-modal-description"
			>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: 400,
						bgcolor: "background.paper",
						borderRadius: 8,
						boxShadow: 24,
						p: 4,
					}}
				>
					<IconButton
						onClick={handleCloseModal}
						sx={{ position: "absolute", top: 8, right: 8 }}
					>
						<CloseIcon />
					</IconButton>

					<Typography variant="h6" gutterBottom>
						Login Instructions
					</Typography>
					<ol>
						<li style={{ marginBottom: "10px" }}>
							<Box>
								<Typography variant="body1">
									Copy the studio code:
								</Typography>
								<Button
									sx={{ marginY: 2 }}
									startIcon={<FileCopyIcon />}
									fullWidth
									onClick={handleCopyCode} // Add onClick handler for copying
								>
									10PSBAY
								</Button>
							</Box>
						</li>
						<li style={{ marginBottom: "10px" }}>
							<Typography variant="body1">
								Download the app or go to the website:
							</Typography>
							<Button
								sx={{ marginY: 2 }}
								fullWidth
								startIcon={<AppleIcon />}
								onClick={() =>
									window.open(
										"https://apps.apple.com/us/app/mystudio-app/id1258207230"
									)
								}
							>
								Apple Store
							</Button>
							<Button
								fullWidth
								startIcon={<ShopIcon />}
								onClick={() =>
									window.open(
										"https://play.google.com/store/apps/details?id=com.mystudio.app"
									)
								}
							>
								Google Play Store
							</Button>
							<Button
								sx={{ marginY: 2 }}
								fullWidth
								startIcon={<WebIcon />}
								onClick={() =>
									window.open(
										"https://cp.mystudio.io/Mobile/?=10PSBAY/10553///1686720467"
									)
								}
							>
								Website
							</Button>
						</li>
						<li style={{ marginTop: "10px" }}>
							<Typography variant="body1">
								Enter your studio code + account information to
								login and manage your account.
							</Typography>
						</li>
					</ol>
				</Box>
			</Modal>
		</>
	);
};

export default MemberModal;
