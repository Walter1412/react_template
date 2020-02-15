import React, { useState } from 'react'
import style from './style'

function Buton(props) {
	const { prefix, suffix, children, dataSize, customizeCSS } = props
	const getStyle = style(props)
	return (
		<getStyle.Button dataSize={dataSize} customizeCSS={customizeCSS}>
			{prefix}
			{children}
			{suffix}
		</getStyle.Button>
	)
}

export default Buton
