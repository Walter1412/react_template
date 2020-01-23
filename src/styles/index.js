import { styled, css, mq } from 'js/lib/plugins/emotion'
import normalize from 'normalize.css'

export const styles = css`
	${normalize}
`

const pages = {
	login: css`
		${mq({
			border: ['1px solid pink', '1px solid yellow', '1px solid black'],
		})}
	`,
}

export const Wrapper = styled('div')`
	label: wrapper;
	width: 100%;
	height: 100%;

	${props => {
		const { pageName } = props
		return !pages[pageName] ? '' : pages[pageName].styles
	}};
`

export const Container = styled('div')`
	label: container;
	margin: 0 auto;
	border: 1px solid red;
	${mq({
		width: ['100%', '560px', '720px', '900px'],
	})};
`
