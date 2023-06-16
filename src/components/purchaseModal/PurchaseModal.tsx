import React, { useState } from "react";
import { Box, Typography, IconButton, Button, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import AppleIcon from "@mui/icons-material/Apple";
import ShopIcon from "@mui/icons-material/Shop";
import WebIcon from "@mui/icons-material/Web";

const PurchaseModal = () => {
	const [openModal, setOpenModal] = useState(false);

	const handleOpenModal = () => {
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	return (
		<>
			<Button
				onClick={handleOpenModal}
				variant="contained"
				color="primary"
			>
				Purchase Membership
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
						Get Started Today
					</Typography>
					<ol>
						<li style={{ marginBottom: "10px" }}>
							<Typography variant="body1">
								Choose a program:
							</Typography>
							<Button
								sx={{ marginY: 2 }}
								fullWidth
								onClick={() =>
									window.open(
										"https://cp.mystudio.io/m/?=10PSBAY/10553/54044//1686877502"
									)
								}
							>
								ADULT MEMBERSHIP
							</Button>
							<Button
								fullWidth
								onClick={() =>
									window.open(
										"https://cp.mystudio.io/m/?=10PSBAY/10553/54022//1686877502"
									)
								}
							>
								KIDS MEMBERSHIP
							</Button>
							<Button
								sx={{ marginY: 2 }}
								fullWidth
								onClick={() =>
									window.open(
										"https://cp.mystudio.io/m/?=10PSBAY/10553/55464//1686877502"
									)
								}
							>
								WOMEN'S SELF-DEFENSE MEMBERSHIP
							</Button>
							<Button
								fullWidth
								onClick={() =>
									window.open(
										"https://cp.mystudio.io/m/?=10PSBAY/10553/54528//1686877502"
									)
								}
							>
								FIRST RESPONDERS MEMBERSHIP
							</Button>
						</li>
					</ol>
				</Box>
			</Modal>
		</>
	);
};

export default PurchaseModal;
