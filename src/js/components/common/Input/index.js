import React, { useState } from 'react'
function Input(props) {
	const { type: inputType, value, onChange, ...restProps } = props

	const [type] = useState(inputType || 'text')

	function handleChange(event) {
		onChange(event)
	}

	return (
		<>
			<input
				value={value}
				type={type || 'text'}
				onChange={handleChange}
				{...restProps}
			></input>
		</>
	)
}

export default Input
