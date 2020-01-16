import styled from 'styled-components'

export const Wrapper = styled.div`
	color: hsl(0, 0%, 45%);
	font-size: 0.9rem;

	a {
		color: hsl(0, 0%, 35%);
		text-decoration: none;
		vertical-align: middle;
	}

	img {
		margin: 0 auto;
		padding-right: 5px;
		vertical-align: sub;
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
