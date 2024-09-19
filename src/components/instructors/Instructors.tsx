import React, { useState } from "react";
import {
	Box,
	Typography,
	Button,
	Modal,
	Grid,
	Card,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";
import { texts } from "./texts";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Close } from "@mui/icons-material";

const InstructorsSection = styled(Box)`
	background-image: url("/instructors.png");
	background-size: cover;
	background-position: center;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 30px;
	text-align: center;
	width: 100%;
`;

const InstructorCard = styled(Card)`
	padding: 20px;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	text-align: center;
	width: 100%;
	max-width: 350px; /* Adjust this if you want cards wider */
`;

const InstructorImage = styled(Image)`
	border-radius: 50%;
`;

const InstructorName = styled(Typography)`
	font-weight: bold;
	margin-top: 10px;
`;

const InstructorSpecialty = styled(Typography)`
	margin-top: 5px;
	text-align: center;
	flex-grow: 1;
`;

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	overflowY: "scroll",
	maxHeight: "80vh",
	width: "90%",
	bgcolor: "background.paper",
	border: "2px solid #000",
	borderRadius: 4,
	boxShadow: 24,
	p: 4,
};

const Instructors = () => {
	const [openModal, setOpenModal] = useState(false);
	const [instructor, setInstructor] = useState<any>(undefined);

	const handleOpenModal = (instructorName: string) => {
		const selectedInstructor = texts.find(
			(text) => text.name === instructorName
		);
		setInstructor(selectedInstructor);
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	return (
		<InstructorsSection>
			<Box mb={8}>
				<Typography
					variant="h5"
					sx={{ fontWeight: "bold" }}
					gutterBottom
				>
					GET TO KNOW OUR
				</Typography>
				<Typography
					variant="h4"
					sx={{ fontWeight: "bold" }}
					color="primary"
					gutterBottom
				>
					TALENTED INSTRUCTORS
				</Typography>
			</Box>
			<Grid
				container
				spacing={3}
				justifyContent="center"
				alignItems="stretch"
				sx={{ width: "100%" }}
			>
				{texts.map((instructor, index) => (
					<Grid
						key={index}
						item
						xs={12} // Full width on extra small screens
						sm={6} // Two items per row on small screens
						md={4} // Three items per row on medium screens
						lg={3} // Four items per row on large screens
						sx={{
							display: "flex",
							justifyContent: "center",
							width: "100%",
							minWidth: 0, // Prevents cards from squeezing
						}}
					>
						<InstructorCard>
							<InstructorImage
								src={instructor.image}
								alt={instructor.name}
								width={200}
								height={200}
							/>
							<InstructorName variant="h5">
								{instructor.name}
							</InstructorName>
							<InstructorSpecialty variant="body1" m={3}>
								{instructor?.description?.map(
									(item: any, index: any) => {
										return <div key={index}>{item}</div>;
									}
								)}
							</InstructorSpecialty>
							<Button
								variant="contained"
								onClick={() => handleOpenModal(instructor.name)}
								sx={{ marginTop: "auto" }}
							>
								Learn More
							</Button>
						</InstructorCard>
					</Grid>
				))}
			</Grid>
			<Modal open={openModal} onClose={handleCloseModal}>
				<Box sx={style}>
					<IconButton
						sx={{ position: "absolute", top: 8, right: 8 }}
						onClick={handleCloseModal}
					>
						<Close />
					</IconButton>
					<Grid container spacing={2}>
						<Grid item>
							<Image
								src={instructor?.image}
								alt={instructor?.name}
								style={{ borderRadius: 4 }}
								width="150"
								height="150"
							/>
						</Grid>
						<Grid item xs={12} sm={8}>
							<Typography
								variant="h4"
								fontWeight="bold"
								color="primary"
							>
								{instructor?.name}
							</Typography>
							<Typography variant="subtitle1" fontWeight="bold">
								{instructor?.description?.map(
									(item: any, index: any) => {
										return <div key={index}>{item}</div>;
									}
								)}
							</Typography>
						</Grid>
					</Grid>

					<Typography variant="body1" my={4}>
						{instructor?.summary}
					</Typography>
					<Typography variant="h5">
						{instructor?.achievements && "Achievements:"}
					</Typography>
					<List>
						{instructor?.achievements?.map(
							(achievement: any, index: any) => (
								<ListItem key={index}>
									<ListItemIcon>
										<ArrowRightIcon />
									</ListItemIcon>
									<ListItemText primary={achievement} />
								</ListItem>
							)
						)}
					</List>

					{instructor?.funFacts?.length > 0 && (
						<>
							<Typography variant="h5">Fun Facts:</Typography>
							<List>
								{instructor?.funFacts?.map(
									(funFact: any, index: any) => (
										<ListItem key={index}>
											<ListItemIcon>
												<ArrowRightIcon />
											</ListItemIcon>
											<ListItemText primary={funFact} />
										</ListItem>
									)
								)}
							</List>
						</>
					)}
				</Box>
			</Modal>
		</InstructorsSection>
	);
};

export default Instructors;
