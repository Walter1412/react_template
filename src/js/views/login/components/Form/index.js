import React, { useRef } from 'react'
import { Formik } from 'formik'
import { Form } from 'components/project'

function LoginForm(props) {
	const inputEl = useRef('firstName')
	return (
		<Formik
			initialValues={{ firstName: 'Walter' }}
			onSubmit={(values, actions) => {
				alert(values)
			}}
		>
			{props => {
				const { values } = props
				return (
					<Form>
						<Form.InputField name='firstName' ref={inputEl}></Form.InputField>
						<pre>{JSON.stringify(values)}</pre>
					</Form>
				)
			}}
		</Formik>
	)
}

export default LoginForm
