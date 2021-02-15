import React, { useEffect } from 'react'
import { connect } from 'formik'
import InputField from './components/InputField'
import PropTypes from 'prop-types'

const propTypes = {}

function Form(props) {
	const { children, formik, ...restProps } = props
	const { handleReset, handleSubmit } = formik
	useEffect(() => {})

	return (
		<form onReset={handleReset} onSubmit={handleSubmit} {...restProps}>
			{children}
		</form>
	)
}

Form.InputField = InputField

Form.propTypes = propTypes

export default connect(Form)
