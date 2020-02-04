import React from 'react'
import style from './style'
import { css } from 'lib/plugins/emotion'
function Header(props) {
	const { ...restProps } = props
	return React.createElement('header', { ...restProps })
}

function HeaderWithRef(props) {
	const getStyle = style(props)
	return (
		<Header css={getStyle.Header} {...props}>
			Header
		</Header>
	)
}

export default HeaderWithRef
