import React, { useState } from 'react'
import styles from './style.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

function Input(props) {
	const { type: inputType, value, onChange, ...restProps } = props

	const [type] = useState(inputType || 'text')

	function handleChange(event) {
		onChange(event)
	}

	return (
		<>
			<input
				value={value}
				type={type || 'text'}
				onChange={handleChange}
				className={cx('input')}
				{...restProps}
			></input>
		</>
	)
}

export default Input
