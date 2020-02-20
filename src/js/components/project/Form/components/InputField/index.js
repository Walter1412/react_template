import React, { useEffect } from 'react'
import { useField, useFormikContext } from 'formik'
import { Input } from 'components/common'
import PropTypes from 'prop-types'

const propTypes = {}
function InputField(props) {
	// props
	const { name, ...restProps } = props
	const [field] = useField(props)
	const { setFieldValue } = useFormikContext()
	// style

	const onChange = event => {
		const value = event.target.value
		setFieldValue(field.name, value)
	}

	return <Input onChange={onChange} value={field.value} {...restProps} />
}
InputField.propTypes = propTypes
export default InputField
