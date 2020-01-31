import React from 'react'
import style from './style'

function Header(props) {
	const { ...restProps } = props
	return React.createElement('header', { ...restProps })
}
export default Header
