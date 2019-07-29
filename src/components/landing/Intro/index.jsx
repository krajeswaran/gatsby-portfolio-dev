import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'Theme'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/dev.svg'
import config from 'Data'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Hello!</h1>
				<h3>I'm KR and I'm a full stack engineer. And I &hellip;</h3>
				<ul>
					<li>
						Specialize in APIs, web apps, systems design, architecture,
						performance engineering, CI/CD and devops.
					</li>
					<li>Have experience with leading teams and hiring.</li>
					<li>Scaled and stabilized startup tech stack at Plivo.</li>
					<li>
						Developed cutting edge Android products for Visa and web apps used
						by millions everyday for PayPal.
					</li>
					<li>
						Enjoy working with remote teams, experienced in agile development
						methodology.
					</li>
				</ul>
				<Button as={AnchorLink} href="#contact">
					Hire me
				</Button>
			</Details>
			<Thumbnail>
				<img src={dev} alt={config.defaultDescription} />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
