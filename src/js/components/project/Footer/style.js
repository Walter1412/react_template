import { styled, css, mq } from 'lib/plugins/emotion'

export default props => {
	return {
		Footer: styled('footer')`
			label: Footer;
			${mq({
				width: ['100%', '560px', '720px', '900px'],
			})};
			border: 1px solid blue;
			margin: 0 auto;
			height: 400px;
		`,
	}
}
