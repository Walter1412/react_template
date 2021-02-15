import React, { useState } from 'react'
import style from './style'
import { isFunction } from 'lodash'
import PropTypes from 'prop-types'

const propTypes = {
	value: PropTypes.any,
	name: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string,
}
// const getStyle = style()

function Input(props) {
	const { onChange } = props
	console.log('props :', props)

	const handleChange = event => {
		event.stopPropagation()
		if (isFunction(onChange)) {
			onChange(event)
		}
	}

	return (
		<div>
			<input onChange={handleChange} {...props} />
		</div>
	)
}

Input.propTypes = propTypes

export default Input
