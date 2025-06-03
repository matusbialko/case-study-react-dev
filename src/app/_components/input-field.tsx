'use client'

import React from 'react'

interface InputFieldProps {
	title: string
	value: string | number
	onChange: (value: string | number) => void
	placeholder?: string
	inputType: string,
	requiredInput: boolean
}

const InputField: React.FC<InputFieldProps> = ({
	title,
	value,
	onChange,
	placeholder,
	inputType = 'text',
	requiredInput
}) => {
  	return (
		<div className="flex flex-col">
			<label className="text-sm mb-[5px]">
				{title}
				{requiredInput && (
					<span className="text-primary text-xs ml-1">*</span>
				)}
			</label>
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