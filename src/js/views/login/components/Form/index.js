import React from 'react'
import styles from './style.module.scss'
import classNames from 'classnames/bind'
import { Form, Field } from 'react-final-form'
const cx = classNames.bind(styles)
console.log(cx)

function LoginForm(props) {
	const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
	const onSubmit = async values => {
		await sleep(300)
		window.alert(JSON.stringify(values, 0, 2))
	}
	return (
		<Form
			onSubmit={onSubmit}
			validate={values => {
				const errors = {}
				if (!values.userName) {
					errors.userName = 'Required'
				}
				if (!values.password) {
					errors.password = 'Required'
				}
				return errors
			}}
			render={({ handleSubmit, form, submitting, pristine }) => (
				<form onSubmit={handleSubmit}>
					<Field name='userName'>
						{({ input, meta }) => {
							return (
								<div>
									<label>UserName</label>
									<input {...input} type='text' placeholder='userName' />
									{meta.error && meta.touched && <span>{meta.error}</span>}
								</div>
							)
						}}
					</Field>
					<Field name='password'>
						{({ input, meta }) => (
							<div>
								<label>Password</label>
								<input {...input} type='text' placeholder='password' />
								{meta.error && meta.touched && <span>{meta.error}</span>}
							</div>
						)}
					</Field>
					<div className='buttons'>
						<button type='submit' disabled={submitting}>
							Submit
						</button>
						<button
							type='button'
							onClick={form.reset}
							disabled={submitting || pristine}
						>
							Reset
						</button>
					</div>
				</form>
			)}
		/>
	)
}

export default LoginForm
