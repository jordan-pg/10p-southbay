import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "10th Planet South Bay Jiu-jitsu",
	description: "10th Planet South Bay Jiu-jitsu",
	icons: {
		icon: "/favicon.ico",
		appleTouchIcon: "/apple-touch-icon.png",
		androidChrome192: "/android-chrome-192x192.png",
		androidChrome512: "/android-chrome-512x512.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body style={{ margin: 0 }} className={inter.className}>
				{children}
			</body>
		</html>
	);
}
