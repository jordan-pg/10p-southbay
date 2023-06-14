"use client";
import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ThemeProvider, styled } from "@mui/material";
import Image from "next/image";
import theme from "@/components/theme/theme";
import Home from "@/components/home/Home";
import Testimonials from "@/components/testimonials/Testimonials";
import About from "@/components/about/About";
import Instructors from "@/components/instructors/Instructors";
import Footer from "@/components/footer/Footer";
import Schedule from "@/components/schedule/Schedule";
import { Link } from "react-scroll";
import Contact from "@/components/contact/Contact";
// import MemberModal from "@/components/memberModal/MemberModal";

const drawerWidth = 240;
const navItems = ["ABOUT", "INSTRUCTORS", "TESTIMONIALS", "SCHEDULE", "CONTACT",];

const StyledNavButton = styled(ListItemButton)(({ selected }) => ({
	position: "relative",
	height: "100%",
	paddingBottom: 3,
	maxWidth: "fit-content",
	"& .MuiTypography-root": {
		color: selected ? "rgba(38, 192, 226)" : "white",
		borderRadius: 12,
		fontWeight: 600,
	},
	"&::before": {
		content: '""',
		position: "absolute",
		left: 0,
		bottom: 0,
		width: 0,
		borderBottom: `2px solid ${theme.palette.primary.main}`,
		transition: "width 0.2s ease-out",
	},
	"&:hover::before": {
		width: "80%",
		margin: "auto",
		left: 0,
		right: 0,
	},
	"&:hover": {
		backgroundColor: "transparent",
		"& .MuiTypography-root": {
			color: `${theme.palette.primary.main}`,
		},
		cursor: "pointer",
	},
}));

const Navigation = () => {
	const [mounted, setMounted] = useState(false);
	const [mobileOpen, setMobileOpen] = useState<boolean>(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll("section");
			let currentSection = "";

			sections.forEach((section) => {
				const sectionTop = section.offsetTop;
				const sectionHeight = section.offsetHeight;

				if (
					window.scrollY >= sectionTop - 100 &&
					window.scrollY < sectionTop + sectionHeight - 100
				) {
					currentSection = section.id;
				}
			});

			setActiveSection(currentSection);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.pageYOffset;
			if (scrollPosition > 0 && !isScrolled) {
				setIsScrolled(true);
			} else if (scrollPosition === 0 && isScrolled) {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [isScrolled]);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				10th Planet South Bay
			</Typography>
			<Divider />
			<List>
				{navItems.map((item) => (
					<Link
						key={item.toLowerCase()}
						to={item.toLowerCase()}
						spy={true}
						smooth={true}
						duration={500}
						onClick={handleDrawerToggle}
					>
						<StyledNavButton
							key={item}
							selected={activeSection === item.toLowerCase()}
						>
							<Typography variant="subtitle1">{item}</Typography>
						</StyledNavButton>
					</Link>
				))}
				{/* <MemberModal /> */}
				<Button
					variant="contained"
					sx={{
						my: 2,
					}}
					onClick={() =>
						window.open(
							"https://cp.mystudio.io/m/?=10PSBAY%252F10553%252F54044%252F%252F1684130926"
						)
					}
				>
					Pre-order Membership
				</Button>
			</List>
		</Box>
	);

	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				<AppBar
					component="nav"
					color="transparent"
					sx={{
						backgroundColor: isScrolled
							? "rgba(0,0,0, .85)"
							: "transparent",
						boxShadow: "none",
						transition: "background-color 0.3s ease-in-out",
					}}
				>
					<Toolbar
						sx={{
							justifyContent: "space-between",
							m: { xs: 1 },
						}}
					>
						<Box
							sx={{
								gap: 5,
								alignItems: "center",
								display: "flex",
							}}
						>
							<Image
								src="/logo.png"
								alt="logo"
								width={70}
								height={50}
								style={{ cursor: "pointer" }}
							/>
							{navItems.map((item) => (
								<Link
									key={item.toLowerCase()}
									to={item.toLowerCase()}
									spy={true}
									smooth={true}
									duration={500}
								>
									<StyledNavButton
										key={item}
										sx={{
											display: {
												xs: "none",
												sm: "none",
												md: "inline-flex",
											},
										}}
										selected={
											activeSection === item.toLowerCase()
										}
									>
										<Typography variant="subtitle1">
											{item}
										</Typography>
									</StyledNavButton>
								</Link>
							))}
						</Box>
						<Box
							sx={{
								display: { xs: "none", sm: "none", md: "flex" },
							}}
						>
							{/* <MemberModal /> */}
							<Button
								variant="contained"
								sx={{
									ml: 2,
								}}
								onClick={() =>
									window.open(
										"https://cp.mystudio.io/m/?=10PSBAY%252F10553%252F54044%252F%252F1684130926"
									)
								}
							>
								Pre-order Membership
							</Button>
						</Box>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							sx={{ display: { md: "none" } }}
						>
							<MenuIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
				<Box component="nav">
					<Drawer
						variant="temporary"
						anchor="right"
						open={mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true,
						}}
						sx={{
							display: { xs: "block", sm: "none" },
							"& .MuiDrawer-paper": {
								boxSizing: "border-box",
								width: drawerWidth,
							},
						}}
					>
						{drawer}
					</Drawer>
				</Box>
				<Box
					component="main"
					sx={{
						m: "auto",
						minHeight: "90vh",
						display: "grid",
					}}
				>
					<section id="home">
						<Home />
					</section>
					<section id="about">
						<About />
					</section>
					<section id="instructors">
						<Instructors />
					</section>
					<section id="testimonials">
					<Testimonials />
					</section>
					<section id="schedule">
						<Schedule drawerOpen={mobileOpen} />
					</section>
					<section id="contact">
						<Contact />
					</section>
					<Footer />
				</Box>
			</Box>
		</ThemeProvider>
	);
};

export default Navigation;
