import React from "react";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

const ScheduleSection = styled(Box)(({ theme }) => ({
	margin: theme.spacing(6),
	textAlign: "center",
	marginTop: 50,
}));

const GoogleCalendarEmbed = styled("iframe")(
	({ drawerOpen }: { drawerOpen: boolean }) => ({
		width: "100%",
		height: "80vh",
		border: 0,
		borderRadius: 4,
		pointerEvents: drawerOpen ? "none" : "auto",
	})
);

const Schedule = ({ drawerOpen }: { drawerOpen: boolean }) => {
	return (
		<ScheduleSection>
			<Typography variant="h5" sx={{ fontWeight: "bold" }} gutterBottom>
				EXPLORE OUR
			</Typography>
			<Typography
				variant="h4"
				sx={{ fontWeight: "bold" }}
				color="primary"
				gutterBottom
				mb={4}
			>
				CLASS SCHEDULE
			</Typography>
			<GoogleCalendarEmbed
				src="https://cp.mystudio.io/cs/?=10PSBAY/10553///1684256227"
				title="Schedule"
				drawerOpen={drawerOpen}
			/>
		</ScheduleSection>
	);
};

export default Schedule;
