import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import facepaint from 'facepaint'

const breakpoints = [576, 768, 992, 1200]

const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

const zIndex = {}

const rem = value => {
	return value
}

export { jsx, css, styled, mq, zIndex, rem }
