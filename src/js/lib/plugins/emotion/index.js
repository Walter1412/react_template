import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import facepaint from 'facepaint'
import theme from 'styles/theme'
import { replace, toNumber } from 'lodash'

const breakpoints = [576, 768, 992, 1200]

const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

const zIndex = {}

const rem = value => {
	const { fontSize } = theme
	const { basic } = fontSize
	const bodyFontSizeNumber = toNumber(replace(basic, 'px', ''))
	const currentFontSizeNumber = toNumber(replace(value, 'px', ''))
	const newFontSizeNumber = `${currentFontSizeNumber / bodyFontSizeNumber}rem`
	return newFontSizeNumber
}

export { jsx, css, styled, mq, zIndex, rem }
