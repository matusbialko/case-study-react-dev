'use client'

import React, { useState } from 'react'
import InputField from '@/app/_components/input-field'
import Link from 'next/link'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="login-container w-full flex flex-col justify-start items-start">
            <div className="w-full flex flex-col bg-white p-5">
                <h2 class="title-orange">Customer Login</h2>
                <InputField
                    title="Email"
                    value={email}
                    onChange={setEmail}
                    inputType="email"
                />
                <InputField
                    title="Password"
                    value={password}
                    onChange={setPassword}
                    inputType="password"
                />
                <button className="btn-primary mt-5">Sign in</button>
                <h2 class="title-black mt-5">New Customers</h2>
                <p>If you don’t have an account yet, you can <Link href='/register'>create an account</Link> here.</p>
            </div>
        </div>
    )
}