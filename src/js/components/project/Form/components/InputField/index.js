import React, { useEffect } from 'react'
import { useField, useFormikContext } from 'formik'
import { Input } from 'components/common'
import PropTypes from 'prop-types'

const propTypes = {}
function InputField(props) {
	// props
	const { name, ...restProps } = props
	const [field, meta, helpers] = useField(props)
	const { setFieldValue } = useFormikContext()
	// style

	const onChange = event => {
		const value = event.target.value
		setFieldValue(field.name, value)
	}

	return <Input {...restProps} onChange={onChange} value={field.value} />
}
InputField.propTypes = propTypes
export default InputField
