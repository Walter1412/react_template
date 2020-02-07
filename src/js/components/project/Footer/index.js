import React from 'react'
import style from './style'

function Footer(props) {
	const getStyle = style(props)
	const { ...restProps } = props
	return <getStyle.Footer>Footer</getStyle.Footer>
}

export default Footer
