import React, { useState } from 'react'
import LoginForm from './components/Form'
import Global from 'styles/global'
import { Example } from './style'
console.log(Global)

function Login() {
	return (
		<>
			<LoginForm />
			<Example color='red'>
				<a>qweqwsadf</a>
			</Example>
		</>
	)
}
export default Login
