import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBarNavigator from "@/components/bars/sidebar-nav.component";
import GradientBg from "@/components/backgrounds/gradient-bg.component";
import MainBg from "@/components/backgrounds/main-bg.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "AMIR DEILAMIZADEH",
	description: "Portfolio of Amir Deilamizadeh",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Rajdhani:wght@300;400;500;600;700&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
			</head>
			<body className={inter.className}>
				<MainBg>
					<GradientBg>
						<SideBarNavigator>{children}</SideBarNavigator>
					</GradientBg>
				</MainBg>
			</body>
		</html>
	);
}
