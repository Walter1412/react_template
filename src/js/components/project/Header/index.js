import React from 'react'
import style from './style'
import { css } from 'lib/plugins/emotion'
function Header(props) {
	const { ...restProps } = props
	return React.createElement('header', { ...restProps })
}

function HeaderWithRef(props) {
	return <Header css={style().Header} {...props}></Header>
}

export default HeaderWithRef
