'use client'

import React from 'react'
import Image from "next/image"

interface ErrorBannerProps {
  	text: string | number
}

const ErrorBanner: React.FC<ErrorBannerProps> = ({
  	text
}) => {
  	return (
 		<div className="bg-danger/20 rounded-md flex flex-row justify-start items-center gap-2 px-4 py-1.5 mt-5">
        	<Image
            	src="/error.svg"
            	alt="error"
            	width={16}
            	height={16}
        	/>
        	<p className="text-sm text-danger">{text}</p>
    	</div>
  	)
}

export default ErrorBanner