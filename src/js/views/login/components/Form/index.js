import React from 'react'
import { Formik } from 'formik'
import { Form } from 'components/project'

function LoginForm(props) {
	return (
		<Formik
			initialValues={{ firstName: 'Walter' }}
			onSubmit={(values, actions) => {
				alert(values)
			}}
		>
			{props => {
				return (
					<Form>
						<Form.InputField></Form.InputField>
					</Form>
				)
			}}
		</Formik>
	)
}

export default LoginForm
