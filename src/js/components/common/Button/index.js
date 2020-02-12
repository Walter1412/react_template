import React, { useState } from 'react'
import style from './style'

function Buton(props) {
	const { prefix, suffix, children, customizeCSS } = props
	const getStyle = style(props)
	return (
		<getStyle.Button color='pink' customizeCSS={customizeCSS}>
			{prefix}
			{children}
			{suffix}
		</getStyle.Button>
	)
}

export default Buton
