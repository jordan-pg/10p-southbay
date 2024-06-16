import React, { useState } from "react";
import {
	Box,
	Typography,
	Grid,
	Button,
	Modal,
	IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";

const AboutSection = styled(Box)`
	background-image: url("/group.png");
	background-size: cover;
	background-position: center top 10vh;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding-top: 10px;
	text-align: center;
	margin: 150px 0;
`;

const ImageGrid = styled(Grid)`
	margin-top: 40px;
	@media (max-width: 960px) {
		.MuiGrid-item {
			flex-basis: 50%;
		}
	}

	@media (max-width: 600px) {
		.MuiGrid-item {
			flex-basis: 100%;
		}
	}
`;

const About = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<AboutSection>
			<Typography variant="h5" sx={{ fontWeight: "bold" }} gutterBottom>
				WELCOME TO THE
			</Typography>
			<Typography
				variant="h4"
				sx={{ fontWeight: "bold" }}
				color="primary"
				gutterBottom
			>
				PANTHER&apos;S DEN
			</Typography>
			<Typography variant="body1" m={3}>
				PJ Barch, founder of 10th Planet South Bay Jiu Jitsu in Chula
				Vista, has long been on a journey of self actualization to give
				meaning, purpose, community, and a sense of security through Jiu
				Jitsu and combat sports. All of the instructors at South Bay are
				committed to creating a positive learning environment. The
				coaching style at our academy has been developed through decades
				of training and competing in multiple disciplines under numerous
				world class coaches. <br />
				<br /> The systems in place utilize multiple different
				approaches and styles of instruction to help everyone regardless
				of experience level. Whatever your goals, or the reason you
				walked through our front door, we intend to create an
				environment where those goals can be recognized.
				<br />
				<Button
					variant="contained"
					sx={{
						mt: 2,
					}}
					onClick={openModal}
				>
					READ MORE
				</Button>
			</Typography>
			<Box mt={24}>
				<ImageGrid container spacing={2}>
					<Grid item xs={12} sm={6} md={4}>
						<Image
							src="/team1.png"
							alt="Image 1"
							width={350}
							height={225}
							style={{ borderRadius: 3 }}
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Image
							src="/team2.png"
							alt="Image 2"
							width={350}
							height={225}
							style={{ borderRadius: 3 }}
						/>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Image
							src="/team3.png"
							alt="Image 3"
							width={350}
							height={225}
							style={{ borderRadius: 3 }}
						/>
					</Grid>
				</ImageGrid>
			</Box>
			<Modal
				open={isOpen}
				onClose={closeModal}
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Box
					sx={{
						width: "90%",
						bgcolor: "background.paper",
						p: 3,
						borderRadius: 4,
						position: "relative",
						maxHeight: "90vh",
						overflowY: "scroll",
					}}
				>
					<Typography
						variant="h4"
						sx={{ fontWeight: "bold" }}
						color="primary"
						gutterBottom
						mb={3}
					>
						OUR STORY
					</Typography>
					<Typography variant="body1">
						In late 2016, PJ Barch was afforded the opportunity to
						help grow his own Jiu Jitsu program by long time friend
						and coach Richie “Boogeyman” Martinez. At the age of 26,
						with little experience in coaching but a thirst for
						excellence and growth, PJ began the formation of 10th
						Planet Spring valley. If you asked PJ he&apos;d tell
						you, “I didn&apos;t know what I was doing at the time,
						but I promised to do my best and figure it out along the
						way”. <br />
						<br />
						Over the next 4 years, a formidable team of hundreds of
						students was created. The team was strengthened even
						more when Eddie Bravo black belt Dawna Gonzales joined
						Spring Valley in 2020. However, despite the successes of
						the gym, in early 2021 unforeseen circumstances led to
						PJ having to leave and the full dismemberment of 10th
						Planet Spring Valley. At this moment if you asked PJ
						what was next, and trust me many of his long-time
						students did, he would have replied “I don&apos;t know
						what I&apos;m doing, but I promise you I&apos;m going to
						figure it out.”
						<br /> <br />
						Within 2 months, the money was raised, the logistics
						were hammered out, and a lease agreement on a new space
						in Chula Vista was signed. In the meantime, a long time
						student of PJ, Daniel Melendez offered up his property
						to allow the students to still train as a team. The
						students banded together and got all their collective
						mats together to create an outdoor dojo capable of
						accommodating some 25+ students at a time.
						Unfortunately, the construction at the new gym location
						turned out to be much more time consuming than
						originally anticipated. So for the next 6-7 months,
						despite being a world class competitor and instructor,
						PJ taught the students for free in a backyard. As time
						progressed and the construction didn&apos;t, the
						backyard gym phase had to come to a close. PJ
						subsequently began to sublet space at a boxing gym in
						Bonita, this was closer to his future gym location and
						it had a roof, lights, and temperature control for his
						students - a notable upgrade from being outside. And so
						began the next chapter, and the migration of PJ and his
						band of jiu jitsu ronin. Mats were procured for the
						boxing space and PJ began teaching his students there.
						After some time, it was no longer feasible to sublet
						this space. PJ contacted his old friend JJ at Alliance
						in La Mesa, and JJ told him he would love to host his
						team. The very next day the team was alerted that they
						had to move again. In under six months the team was
						uprooted from Bonita and transplanted to La Mesa as they
						followed PJ. <br /> <br />
						Fast forward to the present day, and PJ and his team are
						finally settled in their new home. After a long and
						arduous journey, 10th Planet South Bay was born. The gym
						is a testament to the perseverance and resilience of PJ
						and his students, who weathered every obstacle and
						challenge thrown their way. The new gym is a
						state-of-the-art facility that boasts top-of-the-line
						equipment and amenities. But more importantly, it&apos;s
						a place where the 10th Planet family can come together
						and continue to grow and learn under PJ&apos;s expert
						guidance. Looking back, PJ can hardly believe how far
						they&apos;ve come, but he knows that the journey has
						only just begun. The future is bright for 10th Planet
						South Bay, and PJ and his students are excited to see
						where it takes them next.
					</Typography>
					<IconButton
						onClick={closeModal}
						sx={{
							position: "absolute",
							top: 10,
							right: 10,
							color: "white",
						}}
					>
						<CloseIcon />
					</IconButton>
				</Box>
			</Modal>
		</AboutSection>
	);
};

export default About;
