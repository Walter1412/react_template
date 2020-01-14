import React from 'react'
import LoginForm from './components/Form'
import { css } from '@emotion/core'

const basic = css`
	color: green;
`

const important = css`
	color: hotpink;
`

function Login() {
	return (
		<>
			<LoginForm />
			<div className={basic}>sdffasfasf</div>
		</>
	)
}
export default Login
