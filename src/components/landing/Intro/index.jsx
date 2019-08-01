import { Button, Container } from 'Common';
import { contact, defaultDescription, photo, photoWebp, summary } from 'Data';
import React from 'react';
import Image from 'react-image-webp';
import dev from 'Static/illustrations/dev.svg';
import { Header } from 'Theme';
import { Details, IntroWrapper, Thumbnail, Wrapper } from './styles';

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<Image src={photo} webp={photoWebp} alt={defaultDescription} />
				<h3>Hello! {defaultDescription}</h3>
				{summary.map(line => (
					<p key={line}>{line}</p>
				))}
				<Button
					onClick={() => {
						window.location.href = `mailto:${contact.email}`
					}}
				>
					Contact me
				</Button>
			</Details>
			<Thumbnail>
				<img src={dev} alt={defaultDescription} />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
