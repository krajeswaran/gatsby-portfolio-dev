import styled from 'styled-components'
import { themeColor, secondaryColor } from 'Data'

export const Button = styled.button`
	cursor: pointer;
	border-radius: 3px;
	box-shadow: 0 4px 10px 0 hsla(0, 0%, 0%, 0.2);
	padding: 0.7rem 2.5rem;
	border: none;
	-webkit-appearance: none;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	color: #fff;
	background: ${themeColor};

	&:focus {
		outline: none;
	}

	&:disabled {
		background: gray;
	}

	${({ secondary }) =>
		secondary &&
		`
		background: ${secondaryColor};
	`}
`
