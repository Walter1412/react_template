import React from 'react'
import style from './style'
import { css } from 'lib/plugins/emotion'
function Footer(props) {
	const getStyle = style(props)
	const { ...restProps } = props
	return React.createElement('footer', { ...restProps })
}

export default Footer
