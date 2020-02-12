import React, { useState } from 'react'
import style from './style'
import PropTypes from 'prop-types'

function Input(props) {
	const { type: inputType, value, onChange, ...restProps } = props
	const getStyle = style(props)
	const [type] = useState(inputType || 'text')

	function handleChange(event) {
		onChange(event)
	}

	return (
		<>
			<getStyle.Input
				value={value}
				type={type || 'text'}
				onChange={handleChange}
				{...restProps}
			></getStyle.Input>
		</>
	)
}

export default Input
