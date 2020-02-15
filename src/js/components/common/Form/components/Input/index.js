import React, { useState } from 'react'
import style from './style'
import { isFunction } from 'lodash'
import PropTypes from 'prop-types'

const propTypes = {
	value: PropTypes.any,
	type: PropTypes.string,
	ref: PropTypes.string,
	readonly: PropTypes.bool,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
}

function Input(props) {
	const {
		type: inputType,
		value,
		ref,
		readonly,
		placeholder,
		onChange,
		...restProps
	} = props
	const getStyle = style(props)
	const [type] = useState(inputType || 'text')

	function handleChange(event) {
		if (isFunction(onChange)) {
			onChange(event)
		}
	}

	return (
		<getStyle.Input>
			<getStyle.InputText
				value={value}
				ref={ref}
				type={type}
				readonly={readonly}
				placeholder={placeholder}
				onChange={handleChange}
				{...restProps}
			></getStyle.InputText>
			<getStyle.InputPrefix></getStyle.InputPrefix>
			<getStyle.InputSuffix></getStyle.InputSuffix>
		</getStyle.Input>
	)
}

Input.propTypes = propTypes

export default Input
