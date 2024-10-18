import { useState } from "react";
import {
	TextField,
	Button,
	MenuItem,
	Select,
	InputLabel,
	FormControl,
	FormHelperText,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Grid,
	IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface FormData {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	programInterest: string;
}

const CLICK_EXIT = "clicked exit";

const CustomFormDialog = () => {
	const [formData, setFormData] = useState<FormData>({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		programInterest: "",
	});

	const [errors, setErrors] = useState<Partial<FormData>>({});
	const [open, setOpen] = useState(false);

	const validate = (): boolean => {
		let tempErrors: Partial<FormData> = {};
		if (!formData.firstName)
			tempErrors.firstName = "First Name is required";
		if (!formData.lastName) tempErrors.lastName = "Last Name is required";
		if (!formData.email) tempErrors.email = "Email is required";
		if (!formData.phone) tempErrors.phone = "Phone is required";
		if (!formData.programInterest)
			tempErrors.programInterest = "Program Interest is required";
		setErrors(tempErrors);
		return Object.keys(tempErrors).length === 0;
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
	  ) => {
		const { name, value } = e.target;
		
		setErrors((prevErrors) => ({
		  ...prevErrors,
		  [name as keyof FormData]: undefined,
		}));
	  
		setFormData({
		  ...formData,
		  [name as keyof FormData]: value as string,
		});
	  };

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!validate()) return;

		const res = await fetch("https://www.mystudio.academy/Api/v2/Leads/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				ZAPHEADERAPIKEY: process.env.NEXT_PUBLIC_MY_STUDIO_API_KEY as any,
			},
			body: JSON.stringify({
				Buyer_first_name: formData.firstName,
				Buyer_last_name: formData.lastName,
				Email: formData.email,
				Phone: formData.phone,
				Source: "Website",
				Program_interest: formData.programInterest,
			}),
		});
		const result = await res.json();
		console.log(result);
		handleClose({reason: CLICK_EXIT});
		alert("Form submitted successfully!");
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = (reason?: { reason: string }) => {
		if (reason?.reason === CLICK_EXIT) {
			setOpen(false);
		}
	};

	return (
		<div>
			<Button variant="outlined" color="primary" onClick={handleOpen}>
				Learn More
			</Button>
			<Dialog
				open={open}
				fullWidth
				disableEscapeKeyDown
				sx={{
					"& .MuiPaper-root": {
						background: "#121212",
					},
				}}
				PaperProps={{
					sx: {
						borderRadius: 8,
						boxShadow: 24,
					},
				}}
			>
				<DialogTitle sx={{ m: 2 }}>
					Get More Information About Our Classes!
					<IconButton
						onClick={() => handleClose({ reason: CLICK_EXIT })}
						sx={{ position: "absolute", top: 8, right: 8 }}
					>
						<CloseIcon />
					</IconButton>
				</DialogTitle>
				<DialogContent sx={{ mx: 2 }}>
					<form onSubmit={handleSubmit}>
						<Grid container direction="column">
							<Grid item xs={12}>
								<TextField
									label="First Name"
									name="firstName"
									value={formData.firstName}
									onChange={handleChange}
									error={!!errors.firstName}
									helperText={errors.firstName}
									fullWidth
									margin="normal"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									label="Last Name"
									name="lastName"
									value={formData.lastName}
									onChange={handleChange}
									error={!!errors.lastName}
									helperText={errors.lastName}
									fullWidth
									margin="normal"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									label="Email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									error={!!errors.email}
									helperText={errors.email}
									fullWidth
									margin="normal"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									label="Phone"
									name="phone"
									value={formData.phone}
									onChange={handleChange}
									error={!!errors.phone}
									helperText={errors.phone}
									fullWidth
									margin="normal"
								/>
							</Grid>
							<Grid item xs={12}>
								<FormControl
									fullWidth
									error={!!errors.programInterest}
									margin="normal"
								>
									<InputLabel>Program Interest</InputLabel>
									<Select
										name="programInterest"
										value={formData.programInterest}
										onChange={handleChange as any}
									>
										<MenuItem value="Adults jiu jitsu">
											Adults jiu jitsu
										</MenuItem>
										<MenuItem value="Kids jiu jitsu">
											Kids jiu jitsu
										</MenuItem>
										<MenuItem value="Women's classes">
											Women&apos;s classes
										</MenuItem>
									</Select>
									{errors.programInterest && (
										<FormHelperText>
											{errors.programInterest}
										</FormHelperText>
									)}
								</FormControl>
							</Grid>
						</Grid>
					</form>
				</DialogContent>
				<DialogActions sx={{ mx: 4, mb: 2 }}>
					<Button
						onClick={handleSubmit}
						color="primary"
						variant="contained"
						fullWidth
					>
						Submit
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default CustomFormDialog;
