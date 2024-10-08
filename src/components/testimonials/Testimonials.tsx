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
	padding: 30px;
	text-align: center;
	margin: 100px 0;
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
			<Grid container spacing={2} mt={3}>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: "100%" }}>
						<CardContent>
							<TestimonialAvatar alt="Jordan" src="/jordan.jpg" />
							<Typography variant="h6">Jordan Griffin</Typography>
							<Typography variant="body1">
								&quot;This gym is awesome! The instructors are
								top-notch and create a supportive environment.
								It feels like a big family, everyone is friendly
								and welcoming. Whether you&apos;re a beginner or
								experienced, this place has got your back.&quot;
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: "100%" }}>
						<CardContent>
							<TestimonialAvatar alt="Alex" src="/alex.jpg" />
							<Typography variant="h6">Alex Holguin</Typography>
							<Typography variant="body1">
								&quot;There&apos;s not one box this gym
								doesn&apos;t check; the instructing, the
								students, the culture and environment all under
								one roof. This place IS the second home
								you&apos;ve always wanted, with an amazing group
								of people to surround yourself with to get high
								quality training. Look no further, we got it all
								here!&quot;
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: "100%" }}>
						<CardContent>
							<TestimonialAvatar alt="Julian" src="/julian.png" />
							<Typography variant="h6">Julian Nevarez</Typography>
							<Typography variant="body1">
								&quot;I&apos;ve been training under Pj Barch for
								over 4 years. I can truly say he is a world
								class instructor. Along with the rest of the
								instructors, they have built a tight knit
								community that shows a lot of love and support
								for each other which makes everyone feel a sense
								of family that strives for growth on and off the
								mats!&quot;
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</TestimonialsSection>
	);
}

export default Testimonials;
