import React, { useEffect } from 'react'
import style from './style'
import PropTypes from 'prop-types'
import { useField } from 'react-final-form'

const propTypes = {}

function Error({ name }) {
	// props
	const { meta } = useField(name, {
		subscription: { touched: true, error: true },
	})
	const { touched, error } = meta

	// style
	const getStyle = style()
	useEffect(() => {})
	return touched && error ? <getStyle.Error>{error}</getStyle.Error> : null
}
Error.propTypes = propTypes
export default Error
