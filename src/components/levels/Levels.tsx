import React from "react";
import { Box, Typography, Button, Card, CardContent, Stack } from "@mui/material";
import { styled } from "@mui/system";

const LevelsSection = styled(Box)`
	text-align: center;
	margin: 100px 0;
`;

const LevelCard = styled(Card)`
	padding: 20px;
	background-color: #1c1c1c; /* Darker card background for contrast */
	border-radius: 10px;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
	text-align: left;
	&:hover {
		box-shadow: 0 6px 15px rgba(255, 255, 255, 0.15); /* Subtle white shadow on hover */
	}
`;

function Levels() {
	return (
		<LevelsSection>
			<Box mb={8}>
				<Typography
					variant="h5"
					sx={{ fontWeight: "bold" }}
					gutterBottom
				>
					PROGRESS THROUGH
				</Typography>
				<Typography
					variant="h4"
					sx={{ fontWeight: "bold" }}
					color="primary"
					gutterBottom
				>
					SKILL LEVELS
				</Typography>
			</Box>
			<Stack spacing={4} margin={2}>
				{[
					{
						title: "Level 1",
						description:
							"All level 1 classes are 60 minutes. This is a combination class with a mixture of drilling, resistance drilling, and constraints-led games, all with an emphasis on foundational positions and techniques. 10-15 minutes of free-form live sparring. Beginner-friendly."
					},
					{
						title: "Level 2",
						description:
							"Level 2 classes are 90 minutes. The structure of these classes is similar to Level 1 but may explore more advanced topics. 20-30 minutes of live free-form sparring. Some experience recommended."
					},
					{
						title: "Mixed Levels",
						description: "Combination of levels 1 & 2."
					},
					{
						title: "Level 3",
						description:
							"This is an advanced level class. There will be no warm-up, and instructors may move through positions rapidly. Not beginner-friendly."
					},
					{
						title: "Wrestling/Judo Integration",
						description:
							"This is considered a Level 2 class with a primary focus on standing situations in grappling. Some experience recommended. Not beginner-friendly."
					}
				].map((level, index) => (
					<LevelCard key={index} elevation={3}>
						<CardContent>
							<Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
								{level.title}
							</Typography>
							<Typography variant="body1" sx={{ marginTop: 1, color: "#bbb", lineHeight: 1.6 }}>
								{level.description}
							</Typography>
						</CardContent>
					</LevelCard>
				))}
			</Stack>
			<Box sx={{ marginTop: 6 }}>
				<Button
					variant="contained"
					color="primary"
					onClick={() =>
						window.open('https://drive.google.com/file/d/1ngLqmToaeaXnXS3_q_Ftdk6gEEcmmmId/view?usp=sharing')
					}
					sx={{ padding: "10px 20px", fontSize: "16px" }}
				>
					Detailed Class Levels PDF
				</Button>
			</Box>
		</LevelsSection>
	);
}

export default Levels;
