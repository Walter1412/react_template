import React from 'react'
import styles from './style.module.scss'
import classNames from 'classnames/bind'
import { Form } from 'components/common'
import { Form as FinalForm, Field as FinalField } from 'react-final-form'
const cx = classNames.bind(styles)

function LoginForm(props) {
	const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
	const onSubmit = async values => {
		window.alert(JSON.stringify(values, 0, 2))
	}

	const validate = values => {
		const errors = {}
		if (!values.firstName) {
			errors.firstName = 'Required'
		}
		return errors
	}
	return (
		<FinalForm onSubmit={onSubmit} validate={validate}>
			{props => {
				const { handleSubmit, form, submitting, values } = props
				return (
					<Form onSubmit={handleSubmit}>
						<FinalField
							name='firstName'
							component={Form.Input}
							placeholder='please type First Name'
						/>
						<Form.Error name='firstName' />
						<FinalField
							name='lastName'
							component={Form.Input}
							placeholder='please type Last Name'
						/>
						<Form.Error name='lastName' />
						<button type='submit' disabled={submitting}>
							Submit
						</button>
						<pre>{JSON.stringify(values, 0, 2)}</pre>
					</Form>
				)
			}}
		</FinalForm>
	)
}

export default LoginForm
