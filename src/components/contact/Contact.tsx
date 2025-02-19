import React from "react";
import {
	Box,
	Grid,
	Typography,
	styled,
	Link,
	Button,
} from "@mui/material";
import { Email, Phone, Instagram } from "@mui/icons-material";

const ContactSection = styled(Box)`
	background-image: url("/10ppj2.png");
	background-size: cover;
	background-position: center;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Contact = () => {
	return (
		<ContactSection>
			<Grid maxWidth="90%" container spacing={3} alignItems="center">
				<Grid item xs={12} sm={6} maxWidth="90%">
					<Typography
						variant="h5"
						sx={{ fontWeight: "bold" }}
						gutterBottom
					>
						HAVE QUESTIONS?
					</Typography>
					<Typography
						variant="h4"
						sx={{ fontWeight: "bold" }}
						color="primary"
						gutterBottom
					>
						CONTACT US TODAY
					</Typography>
					<Typography
						variant="body1"
						paragraph
						fontWeight="bold"
						color="primary"
					>
						<Button
							component={Link}
							href="mailto:10thplanetsouthbay@gmail.com"
							color="inherit"
							sx={{ px: 4 }}
							startIcon={<Email sx={{ marginRight: "0.5rem" }} />}
						>
							SEND EMAIL
						</Button>
					</Typography>

					<Typography variant="body1" paragraph fontWeight="bold">
						<Button
							component={Link}
							href="tel:+16197468892"
							color="inherit"
							sx={{ px: 4 }}
							startIcon={<Phone sx={{ marginRight: "0.5rem" }} />}
						>
							+1 619-746-8892
						</Button>
					</Typography>

					<Typography
						variant="subtitle1"
						paragraph
						fontWeight="bold"
						mt={8}
					>
						Connect with us on social media:
					</Typography>

					<Button
						component={Link}
						href="https://www.instagram.com/10psouthbay/"
						target="_blank"
						rel="noopener"
						color="primary"
						sx={{ px: 4 }}
						startIcon={<Instagram sx={{ width: 20, height: 20 }} />}
					>
						@10psouthbay
					</Button>
				</Grid>
				<Grid item xs={12} sm={6}>
					<iframe
						title="Google Maps"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.6020945550795!2d-117.08298952436941!3d32.643418290801634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d94dc0dffd0ceb%3A0x3b4a7d33c757a6dd!2s10th%20Planet%20Jiu%20Jitsu%20-%20South%20Bay!5e0!3m2!1sen!2sus!4v1684221820257!5m2!1sen!2sus"
						loading="lazy"
						width="100%"
						height="400"
						allowFullScreen
						style={{ borderRadius: 4 }}
					></iframe>
				</Grid>
			</Grid>
		</ContactSection>
	);
};

export default Contact;
