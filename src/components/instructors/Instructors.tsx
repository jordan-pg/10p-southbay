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
	padding: 40px;
	text-align: center;
`;

const InstructorCard = styled(Card)`
	padding: 20px;
	border-radius: 8px;
	margin-bottom: 20px;
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
`;

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	overflowY: "scroll",
	maxHeight: "80vh",
	width: '90%',
	bgcolor: "background.paper",
	border: "2px solid #000",
	borderRadius: 4,
	boxShadow: 24,
	p: 4,
};

const Instructors = () => {
	const [openModal, setOpenModal] = useState(false);
	const [instructor, setInstructor] = useState<any>(undefined);

	const handleOpenModal = (instructor: string) => {
		const selectedInstructor = texts.find(
			(text) => text.name === instructor
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
			<Grid container spacing={2}>
				<Grid item xs={12} sm={4} md={3}>
					<InstructorCard>
						<InstructorImage
							src="/pj2.png"
							alt="PJ"
							width={200}
							height={200}
						/>
						<InstructorName variant="h5">PJ Barch</InstructorName>
						<InstructorSpecialty variant="body1" m={3}>
							No Gi
							<br />
							Wrestling Specialist
						</InstructorSpecialty>
						<Button
							variant="contained"
							onClick={() =>
								handleOpenModal('PJ "Butter Panther" Barch')
							}
						>
							Learn More
						</Button>
					</InstructorCard>
				</Grid>
				<Grid item xs={12} sm={4} md={3}>
					<InstructorCard>
						<InstructorImage
							src="/dawna2.png"
							alt="Dawna"
							width={200}
							height={200}
						/>
						<InstructorName variant="h5">
							Dawna Gonzales
						</InstructorName>
						<InstructorSpecialty variant="body1" m={3}>
							Women&apos;s Self Defense
							<br />
							Fundamentals Specialist
						</InstructorSpecialty>
						<Button
							variant="contained"
							onClick={() => handleOpenModal("Dawna Gonzales")}
						>
							Learn More
						</Button>
					</InstructorCard>
				</Grid>
				<Grid item xs={12} sm={4} md={3}>
					<InstructorCard>
						<InstructorImage
							src="/rachel2.png"
							alt="Rachel"
							width={200}
							height={200}
						/>
						<InstructorName variant="h5">
							Rachel Ranschau
						</InstructorName>
						<InstructorSpecialty variant="body1" m={3}>
							Gi
							<br />
							Competition Specialist
						</InstructorSpecialty>
						<Button
							variant="contained"
							onClick={() => handleOpenModal("Rachel Ranschau")}
						>
							Learn More
						</Button>
					</InstructorCard>
				</Grid>
				<Grid item xs={12} sm={4} md={3}>
					<InstructorCard>
						<InstructorImage
							src="/allan2.png"
							alt="Allan"
							width={200}
							height={200}
						/>
						<InstructorName variant="h5">
							Allan De Los Reyes
						</InstructorName>
						<InstructorSpecialty variant="body1" m={3}>
							Kids Coach
							<br />
							Wrestling Specialist
						</InstructorSpecialty>
						<Button
							variant="contained"
							onClick={() =>
								handleOpenModal("Allan De Los Reyes")
							}
						>
							Learn More
						</Button>
					</InstructorCard>
				</Grid>
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
								{instructor?.description}
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
				</Box>
			</Modal>
		</InstructorsSection>
	);
};

export default Instructors;
