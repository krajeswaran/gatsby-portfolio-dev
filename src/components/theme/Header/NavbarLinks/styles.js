import styled from 'styled-components'

export const Wrapper = styled.div`
	color: hsl(0, 0%, 45%);
	vertical-align: middle;
	font-size: 80%;

	a {
		color: hsl(0, 0%, 45%);
		text-decoration: none;
	}

	img {
		margin: 0 auto;
		padding-right: 5px;
		vertical-align: top;
		line-height: 1;
	}

	${({ desktop }) =>
		desktop
			? `
			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 1.5rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
			: `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`
