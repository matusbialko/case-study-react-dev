'use client'

import { redirect } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
	useEffect(() => {
		const userData = localStorage.getItem('userData');

		if (userData) {
			redirect('/products')
		} else {
			redirect('/login')
		}
	}, [])
}