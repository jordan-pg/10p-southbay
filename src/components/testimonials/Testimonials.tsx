import React from "react";
import {
	Box,
	Typography,
	Card,
	CardContent,
	Avatar,
	Grid,
} from "@mui/material";
import { styled } from "@mui/system";

const TestimonialsSection = styled(Box)`
	padding: 40px;
	text-align: center;
	height: 80vh;
`;

const TestimonialAvatar = styled(Avatar)`
	width: 100px;
	height: 100px;
	margin: 0 auto 20px;
`;

function Testimonials() {
	return (
		<TestimonialsSection>
			<Typography variant="h5" sx={{ fontWeight: "bold" }} gutterBottom>
				TESTIMONIALS FROM
			</Typography>
			<Typography
				variant="h4"
				sx={{ fontWeight: "bold" }}
				color="primary"
				gutterBottom
			>
				SATISFIED CUSTOMERS
			</Typography>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: "100%" }}>
						<CardContent>
							<TestimonialAvatar
								alt="Person 1"
								src="/avatar1.jpg"
							/>
							<Typography variant="h6">John Doe</Typography>
							<Typography variant="body1">
								"Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Sed aliquam arcu vitae lorem
								condimentum viverra."
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: "100%" }}>
						<CardContent>
							<TestimonialAvatar
								alt="Person 2"
								src="/avatar2.jpg"
							/>
							<Typography variant="h6">Jane Smith</Typography>
							<Typography variant="body1">
								"Vivamus dapibus tincidunt lorem, a sollicitudin
								mi luctus nec. Nullam consequat sem ut urna
								blandit, eget placerat lectus faucibus."
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: "100%" }}>
						<CardContent>
							<TestimonialAvatar
								alt="Person 3"
								src="/avatar3.jpg"
							/>
							<Typography variant="h6">Alex Johnson</Typography>
							<Typography variant="body1">
								"Fusce aliquam elit ac justo accumsan, at
								tristique libero pellentesque. Nam fringilla
								varius fermentum."
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</TestimonialsSection>
	);
}

export default Testimonials;
