'use client'

import React from 'react'

interface InputFieldProps {
  title: string
  value: string | number
  onChange: (value: string | number) => void
  placeholder?: string
  inputType: string
}

const InputField: React.FC<InputFieldProps> = ({ title, value, onChange, placeholder, inputType = 'text' }) => {
  return (
    <div className="flex flex-col mt-4">
      <label className="text-sm mb-[5px]">{title}</label>
      <input
        type={inputType}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="input-field"
      />
    </div>
  )
}

export default InputField