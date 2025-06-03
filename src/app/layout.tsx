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
			<body className="w-full">
				<div className="w-full min-h-screen flex flex-col items-center bg-white md:bg-transparent">
					<header className="w-full h-12 bg-black" />
					{children}
				</div>
				<footer className="w-full h-12 flex flex-row justify-center items-center bg-black text-white">
					<p className="text-sm">2014 - 2025 GymBeam</p>
				</footer>
			</body>
		</html>
  	)
}
