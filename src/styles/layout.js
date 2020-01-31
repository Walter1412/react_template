import { styled, css, mq } from 'lib/plugins/emotion'

const pages = {
	login: css`
		${mq({
			border: ['1px solid pink', '1px solid yellow', '1px solid black'],
		})}
	`,
}

export default {
	Wrapper: styled('div')`
		label: wrapper;
		width: 100%;
		height: 100%;

		${props => {
			const { pageName } = props
			return !pages[pageName] ? '' : pages[pageName].styles
		}};
	`,
	Container: styled('div')`
		label: container;
		margin: 0 auto;
		border: 1px solid red;
		${mq({
			width: ['100%', '560px', '720px', '900px'],
		})};
	`,
}
