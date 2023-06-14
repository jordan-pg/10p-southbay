import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		
		mode: "dark",
		primary: {
			main: "#26c0e2",
		},
		secondary: {
			main: "#a1cc3a",
		},
		background: {
			paper: "#121212",
			default: "#000000",
		},
		text: {
			primary: "#ffffff",
			secondary: "#a1cc3a",
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					color: "white",
					fontWeight: "bold",
					borderRadius: 24,
					backgroundColor: 'rgba(38, 192, 226, .6)',
					border: '1px solid rgba(38, 192, 226)',
					'&:hover': {
						background: "rgba(38, 192, 226)",
					 },
				}
			}
		}
	}
});

export default theme;
