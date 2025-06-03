'use client'

import React, { useState } from 'react'
import InputField from '@/app/_components/input-field'
import ErrorBanner from '@/app/_components/error-banner'
import Link from 'next/link'
import { useLoading } from '../layout'
import { redirect } from 'next/navigation'

export default function Login() {
    const { setLoading } = useLoading()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [showErrorBanner, setShowErrorBanner] = useState<boolean>(false)

    const handleLogin = async () => {
        try {
            setLoading(true)
            const response = await fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            })

            if (!response.ok) {
                const errText = await response.text()
                throw new Error((errText == 'username and password are not provided in JSON format' ? 'username or password is missing' : errText) || 'Login failed')
            }

            const data = await response.json()
            if (!data?.token) throw new Error('Login failed')
            localStorage.setItem('userToken', data?.token)
        } catch (error) {
            console.error(error)
            setErrorMessage(error?.message)
            setShowErrorBanner(true)
            setTimeout(() => {
                setShowErrorBanner(false)
            }, 3000)
            return
        } finally {
            setLoading(false)
        }
        redirect('/products')
    }

    return (
        <div className="login-container w-full flex flex-col justify-start items-start">
            <div className="w-full flex flex-col bg-white p-5">
                <h2 className="title-orange">Customer Login</h2>
                {showErrorBanner && (
                    <ErrorBanner
                        text={errorMessage}
                    />
                )}
                <div className="w-full flex flex-col gap-5 mt-5">
                    <InputField
                        title="Username"
                        value={username}
                        onChange={setUsername}
                        inputType="text"
                    />
                    <InputField
                        title="Password"
                        value={password}
                        onChange={setPassword}
                        inputType="password"
                    />
                </div>
                <button onClick={handleLogin} className="btn-primary mt-5">Sign in</button>
                <h2 className="title-black mt-5">New Customers</h2>
                <p className="text-sm mb-5">If you don’t have an account yet, you can <Link href='/register'>create an account</Link> here.</p>
            </div>
        </div>
    )
}