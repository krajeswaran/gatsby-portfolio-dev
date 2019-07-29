import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { social } from 'Data'
import { Links, Wrapper } from './styles'

const NavbarLinks = ({ desktop }) => (
	<Wrapper desktop={desktop}>
		<AnchorLink href="#about">Skills</AnchorLink>
		<AnchorLink href="#projects">Code Samples</AnchorLink>
		<AnchorLink href="#contact">Contact</AnchorLink>
		{Object.keys(social).forEach(item => (
			<a
				href={social[item].url}
				target="_blank"
				rel="noopener noreferrer"
				// aria-label={`follow me on ${social[item].name}`}
			>
				<img width="24" src={social[item].icon} alt={social[item].name} />
			</a>
		))}
	</Wrapper>
)

export default NavbarLinks
