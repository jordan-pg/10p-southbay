import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "10th Planet South Bay | Premier Jiu Jitsu Gym in Chula Vista, CA",
	description: "Discover the ultimate Jiu Jitsu experience at 10th Planet South Bay in Chula Vista, California. Our world-class instructors offer expert training in Jiu Jitsu, tailored for all skill levels. Join our thriving community, improve your technique, and achieve your fitness goals with us today.",
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
