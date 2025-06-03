'use client'

import Image from "next/image"
import { usePathname } from "next/navigation"
import React, { createContext, useContext, useState } from 'react'

type LoadingContextType = {
	loading: boolean
	setLoading: (val: boolean) => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export const useLoading = () => {
	return useContext(LoadingContext)
}

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const pathname = usePathname()

	const [loading, setLoading] = useState(false)

	return (
		<div className="w-full flex flex-col items-center">
			<div className="w-full min-h-screen flex flex-col items-center bg-white md:bg-transparent">
				<header className="w-full flex flex-col items-center">
					<div className={`
						${pathname == '/login' ? 'login-container' : 'register-container'}
						w-full h-17.5 md:h-35 flex flex-col justify-start items-start p-5 pb-2.5 md:p-5
					`}>
						<Image
							src="/GB-title.png"
							alt="GymBeam-title"
							width={265}
							height={75}
							className="w-35 h-10 md:w-[265px] md:h-[75px]"
						/>
					</div>
				</header>
				<LoadingContext.Provider value={{ loading, setLoading }}>
					{loading && (
					<div className="fixed top-0 left-0 w-screen h-screen flex flex-row justify-center items-center bg-white/30 z-50">
						<Image
							src="/loader.gif"
							alt="loading"
							width={256}
							height={256}
						/>
					</div>
					)}
					{children}
				</LoadingContext.Provider>
			</div>
		</div>
	)
}