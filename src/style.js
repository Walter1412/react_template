import { styled, css, mq } from 'js/lib/plugins/emotion'
import normalize from 'normalize.css'

export const styles = css`
	${normalize}
`

const pages = {
	login: css`
		${mq({
			border: ['1px solid pink', '1px solid yellow', '1px solid black'],
			color: ['#ff0000', '#ff00ff', '#ffff00', '#ff0ff0'],
		})}
	`,
}

export const Wrapper = styled('div')`
	width: 100%;
	height: 100%;
	border: 1px solid blue;
	${props => {
		console.log(pages)
		const { pageName } = props
		return pages[pageName].styles
	}};
`
