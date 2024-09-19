import React from "react";
import { styled } from "@mui/system";

const VideoContainer = styled("div")`
	position: absolute;
	top: 0;
	left: 0;
	width: 99vw;
	height: 100vh;
	z-index: -1;
	overflow: hidden !important;
`;

const Video = styled("video")`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const BackgroundVideo = () => {
	return (
		<VideoContainer>
			<Video autoPlay muted loop playsInline poster="/10ppj2.png">
				<source src="/10pvideo.webm" type="video/webm" />
				<source src="/10pvideo.mp4" type="video/mp4" />
			</Video>
		</VideoContainer>
	);
};

export default BackgroundVideo;
