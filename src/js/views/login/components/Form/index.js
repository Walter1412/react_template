import React from 'react'
import { Formik } from 'formik'
import { Form } from 'components/project'

function LoginForm(props) {
	return (
		<Formik
			initialValues={{ firstName: 'Walter', lastName: 'Huang' }}
			onSubmit={(values, actions) => {
				alert(values)
			}}
		>
			{props => {
				const { values } = props
				return (
					<Form>
						<Form.InputField name='firstName'></Form.InputField>
						<Form.InputField name='lastName'></Form.InputField>
						<pre>{JSON.stringify(values)}</pre>
					</Form>
				)
			}}
		</Formik>
	)
}

export default LoginForm
