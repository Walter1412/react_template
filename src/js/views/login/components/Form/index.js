import React from 'react'
import { useField, Form, Formik } from 'formik'
// import { Form } from 'components/common'
console.log('Form :', Form)

const MyTextField = ({ label, ...props }) => {
	console.log('props :', props)
	const [field, meta, helpers] = useField(props.name)
	console.log('field :', field)
	return (
		<>
			<label>
				{label}
				<input {...field} {...props} />
			</label>
			{meta.touched && meta.error ? (
				<div className='error'>{meta.error}</div>
			) : null}
		</>
	)
}

function LoginForm(props) {
	return (
		<Formik
			initialValues={{
				email: '',
				firstName: 'red',
				lastName: '',
			}}
			onSubmit={(values, actions) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2))
					actions.setSubmitting(false)
				}, 1000)
			}}
		>
			{props => {
				console.log(props)
				return (
					<Form>
						<MyTextField name='firstName' type='text' label='First Name' />
						<MyTextField name='lastName' type='text' label='Last Name' />
						<MyTextField name='email' type='email' label='Email' />
						<button type='submit'>Submit</button>
					</Form>
				)
			}}
		</Formik>
	)
}

export default LoginForm
