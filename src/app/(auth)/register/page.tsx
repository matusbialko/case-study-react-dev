'use client'

import React, { useState } from 'react'
import InputField from '@/app/_components/input-field'
import ErrorBanner from '@/app/_components/error-banner'
import { useLoading } from '../layout'
import { redirect } from 'next/navigation'

export default function Register() {
    const { setLoading } = useLoading()

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [showErrorBanner, setShowErrorBanner] = useState<boolean>(false)

    const createUser = async () => {
        try {
            if (!firstname) throw new Error('First Name is missing')
            if (!lastname) throw new Error('Last Name is missing')
            if (!username) throw new Error('Username is missing')
            if (!email) throw new Error('Email is missing')
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(email)) throw new Error('Invalid email format')            
            if (!password) throw new Error('Password is missing')
            if (!confirmPassword) throw new Error('Confirm Password is missing')
            if (password != confirmPassword) throw new Error("Password and Confirm Password doesn't match")

            setLoading(true)
            const response = await fetch('https://fakestoreapi.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: Math.floor(Math.random() * 1000000),
                    firstname: firstname,
                    lastname: lastname,
                    username: username,
                    email: email,
                    password: password,
                }),
            })

            if (!response.ok) {
                const errText = await response.text()
                throw new Error(errText)
            }
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

        redirect('/login')
    }

    return (
        <div className="register-container w-full flex flex-col justify-start items-start">
            <div className="w-full flex flex-col bg-white p-5">
                <h2 className="title-orange">Create New Customer Account</h2>
                {showErrorBanner && (
                    <ErrorBanner
                        text={errorMessage}
                    />
                )}
                <div className="flex flex-col md:flex-row justify-start md:justify-between gap-5 mt-5">
                    <div className="w-full md:w-1/2 flex flex-col gap-5">
                        <h2 className="title-black">Personal Information</h2>
                        <InputField 
                            title="First Name"
                            value={firstname}
                            onChange={setFirstname}
                            inputType="text"
                            requiredInput
                        />
                        <InputField 
                            title="Last Name"
                            value={lastname}
                            onChange={setLastname}
                            inputType="text"
                            requiredInput
                        />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col gap-5">
                        <h2 className="title-black">Sign-in Information</h2>
                        <InputField
                            title="Username"
                            value={username}
                            onChange={setUsername}
                            inputType="text"
                            requiredInput
                        />
                        <InputField
                            title="Email"
                            value={email}
                            onChange={setEmail}
                            inputType="email"
                            requiredInput
                        />
                        <InputField
                            title="Password"
                            value={password}
                            onChange={setPassword}
                            inputType="password"
                            requiredInput
                        />
                        <InputField
                            title="Confirm Password"
                            value={confirmPassword}
                            onChange={setConfirmPassword}
                            inputType="password"
                            requiredInput
                        />
                    </div>
                </div>
                <button onClick={createUser} className="btn-primary md:!w-1/2 mt-10">Create an Account</button>
            </div>
        </div>
    )
}