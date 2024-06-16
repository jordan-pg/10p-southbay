import React from "react";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

const ScheduleSection = styled(Box)(({ theme }) => ({
	margin: theme.spacing(6),
	textAlign: "center",
	marginTop: 150,
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

const Events = ({ drawerOpen }: { drawerOpen: boolean }) => {
	return (
		<ScheduleSection>
			<Typography variant="h5" sx={{ fontWeight: "bold" }} gutterBottom>
				UPCOMING
			</Typography>
			<Typography
				variant="h4"
				sx={{ fontWeight: "bold" }}
				color="primary"
				gutterBottom
				mb={4}
			>
				EVENTS
			</Typography>
			<GoogleCalendarEmbed
				src="https://cp.mystudio.io/e/?=10PSBAY/10553///1718482355"
				title="Schedule"
				drawerOpen={drawerOpen}
			/>
		</ScheduleSection>
	);
};

export default Events;
