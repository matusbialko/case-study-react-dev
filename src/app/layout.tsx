import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  	variable: "--font-open-sans",
  	subsets: ["latin"],
})

export const metadata: Metadata = {
  	title: "GymBeam",
  	description: "Supplement store",
}

export default function RootLayout({
  	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
  	return (
		<html lang="en">
			<body>
				{children}
			</body>
		</html>
  	)
}
