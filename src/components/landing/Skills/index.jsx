import { Card, Container } from 'Common';
import { skills } from 'Data';
import React from 'react';
import { Column, SkillGrid, Wrapper } from './styles';

export const Skills = () => (
	<Wrapper as={Container} id="skills">
		<h2>Skills</h2>
		<SkillGrid>
			{Object.keys(skills).map(i => (
				<Column key={skills[i].name} color={skills[i].color}>
					<Card>
						<h4>{skills[i].name}</h4>
						{skills[i].items.map(item => (
							<p key={item}>{item}</p>
						))}
					</Card>
				</Column>
			))}
		</SkillGrid>
	</Wrapper>
)
