import React, { useEffect } from 'react'
import { useField } from 'formik'
import PropTypes from 'prop-types'

export function UseFieldText(Component) {
	function UseFieldTextComponent(props) {
		return (
			<>
				<label>123123</label>
				<Component {...props}></Component>
			</>
		)
	}
	return UseFieldTextComponent
}
