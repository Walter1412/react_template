import { css } from 'lib/plugins/emotion'
import normalize from 'normalize.css'
import Theme from './theme'
const { fontFamily, color } = Theme

export default () => css`
	${normalize}
	html {
		box-sizing: border-box;
	}
	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}
	body {
		font-family: ${fontFamily};
		line-height: 1.5;
		color: ${color.primaryDarkest};
		-webkit-font-smoothing: subpixel-antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	:disabled,
	[disabled] {
		cursor: not-allowed !important;
	}

	a {
		background-color: transparent;
		-webkit-text-decoration-skip: objects;

		&,
		&:hover,
		&:focus {
			outline: none;
			text-decoration: none;
		}
	}

	input {
		font-family: inherit;

		&::-ms-clear,
		&::-ms-reveal {
			display: none;
		}

		&:hover,
		&:focus {
			outline: none;
		}
	}

	button {
		cursor: pointer;
		padding: 0;
		font-family: inherit;
		background: transparent;
		border: none;

		&:hover,
		&:focus {
			outline: none;
		}
	}

	textarea {
		font-family: inherit;
		resize: none;

		&:hover,
		&:focus {
			outline: none;
		}
	}

	figure {
		margin: 0;
	}

	img {
		border: none;
		vertical-align: middle;
	}

	ul,
	ol,
	dl {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	p {
		margin: 0;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
		color: red;
	}
`
