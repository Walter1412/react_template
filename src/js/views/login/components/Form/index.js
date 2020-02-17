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
		return errors
	}
	return <FinalForm onSubmit={onSubmit}>{}</FinalForm>
}

export default LoginForm
