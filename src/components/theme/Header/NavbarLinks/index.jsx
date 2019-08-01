import { social } from 'Data';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => (
	<Wrapper desktop={desktop}>
		<AnchorLink href="#skills">Skills</AnchorLink>
		<AnchorLink href="#projects">Code Samples</AnchorLink>
		{Object.keys(social).map(i => (
			<a
				key={social[i].name}
				href={social[i].url}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={`follow me on ${social[i].name}`}
			>
				<img
					key={social[i].name}
					width="18px"
					src={social[i].icon}
					alt={social[i].name}
				/>
				{social[i].name}
			</a>
		))}
	</Wrapper>
)

export default NavbarLinks
