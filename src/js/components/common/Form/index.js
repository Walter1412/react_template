import React, { useEffect } from 'react'
import Input from 'components/common/Form/components/Input'
import Error from 'components/common/Form/components/Error'
import PropTypes from 'prop-types'

const propTypes = {}

function Form(props) {
	const { children, onSubmit, ...restProps } = props
	console.log('onSubmit :', onSubmit)
	useEffect(() => {})

	return (
		<form onSubmit={onSubmit} {...restProps}>
			{children}
		</form>
	)
}

Form.Input = Input
Form.Error = Error

Form.propTypes = propTypes

export default Form
