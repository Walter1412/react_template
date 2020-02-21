import React, { useRef } from 'react'
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
const ComponentWithRef = Component => {
	const forwardRef = (props, ref) => {
		const { current } = ref
		return <Component {...props} forwardedRef={current} />
	}
	return React.forwardRef(forwardRef)
}

// const forwardRef = (props, ref) => {
// 	return <InputField {...props} forwardedRef={ref} />
// }

const InputFieldWithRef = ComponentWithRef(InputField)

// const InputFieldWithRef = React.forwardRef(forwardRef)

InputField.propTypes = propTypes

export default InputFieldWithRef
