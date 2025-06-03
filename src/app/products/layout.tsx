'use client'

import Image from "next/image"
import { useState } from 'react'

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
    const userData = JSON.parse(localStorage.getItem('userData'))
    const [username] = useState(userData?.username)
    const [showDropdown, setShowDropdown] = useState<boolean>(false)
    let dropdownDebounce: NodeJS.Timeout | null = null

    const openDropdown = () => {
        setShowDropdown(true)
        clearTimeout(dropdownDebounce)
    }
    const closeDropdown = () => {
        clearTimeout(dropdownDebounce)
        dropdownDebounce = setTimeout(() => {
            setShowDropdown(false)
        }, 500)
    }

	return (
		<div className="w-full flex flex-col items-center bg-white">
            <div className="container w-full min-h-screen flex flex-col items-center bg-white px-5 pb-20">
                <div className="w-full flex flex-row justify-between items-center pt-2.5 pb-10">
                    <Image
                        src="/GB-title.png"
                        alt="GymBeam-title"
                        width={245}
                        height={70}
                        className="w-35 h-10 md:w-[245px] md:h-17.5"
                    />
                    <div
                        onMouseEnter={openDropdown}
                        onMouseLeave={closeDropdown}
                        className="relative h-6 flex flex-row justify-center items-center gap-2 cursor-pointer"
                    >
                        <p className="text-primary">{username}</p>
                        <Image
                            src="/user.svg"
                            alt="user"
                            width={24}
                            height={24}
                        />
                        {showDropdown && 
                            <div
                                className="absolute top-5 right-0 w-42 bg-white border-2 border-black mt-2 z-30"
                            >
                                <div className="dropdown-arrow" />
                                <div className="relative w-full h-8 flex flex-row items-center p-2 bg-white hover:bg-gray-300 z-50">
                                    <strong>Log out</strong>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                {children}
            </div>
		</div>
	)
}