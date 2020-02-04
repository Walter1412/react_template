import React from 'react'
import style from './style'

function Footer(props) {
	const getStyle = style(props)
	const { ...restProps } = props
	console.log('getStyle', getStyle)
	return <getStyle.Footer>Footer</getStyle.Footer>
}

export default Footer
