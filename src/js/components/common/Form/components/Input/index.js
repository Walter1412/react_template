import React, { useState } from 'react'
import style from './style'
import { isFunction } from 'lodash'
import PropTypes from 'prop-types'

const propTypes = {
	value: PropTypes.any,
	type: PropTypes.string,
	ref: PropTypes.string,
	placeholder: PropTypes.string,
}

function Input(props) {
	console.log('props :', props)
	const { type: inputType, ref, placeholder, Change, input } = props
	const getStyle = style(props)
	const [type] = useState(inputType || 'text')

	// function handleChange(event) {
	// 	console.log('event :', onChange)
	// 	if (isFunction(onChange)) {
	// 		onChange(event)
	// 	}
	// }

	return (
		<getStyle.Input>
			<getStyle.InputText {...input} type={type}></getStyle.InputText>
			<getStyle.InputPrefix></getStyle.InputPrefix>
			<getStyle.InputSuffix></getStyle.InputSuffix>
		</getStyle.Input>
	)
}

Input.propTypes = propTypes

export default Input
