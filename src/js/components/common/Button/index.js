import React, { useState } from 'react'
import style from './style'

function Buton(props) {
	const { children, dataColor } = props
	const getStyle = style(props)
	return (
		<getStyle.Button color='yellow' data-color={dataColor}>
			{children}
		</getStyle.Button>
	)
}

export default Buton
