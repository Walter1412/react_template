import React, { useState } from 'react'
import style from './style'
import { isFunction } from 'lodash'
import PropTypes from 'prop-types'

function Input(props) {
	const { type: inputType, value, ref, onChange, ...restProps } = props
	const getStyle = style(props)
	const [type] = useState(inputType || 'text')

	function handleChange(event) {
		if (isFunction(onChange)) {
			onChange(event)
		}
	}

	return (
		<getStyle.Input
			value={value}
			ref={ref}
			type={type}
			onChange={handleChange}
			{...restProps}
		></getStyle.Input>
	)
}

export default Input
