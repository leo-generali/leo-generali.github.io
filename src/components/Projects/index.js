import React from 'react';
import Link from 'gatsby-link';

import StyledLink from '../StyledLink'

import styled from 'styled-components';

import { colors } from '../../utils/style'

const projectColors = {
  red: '#a55eea'
};

// To add back in once the blog post has been written.
// <Link className="project-link project-link--post" to="/better-gradient-tool">About</Link>

const Project = styled.div` `;

const Description = styled.p`
  color: #818080;
  padding: 0 0 0 20px;
  border-left: 5px solid #818080;
`;

const Title = styled.p`
  font-weight: 600;
`;

const projects = [
  {
    id: 1,
    title: 'Better Gradient Tool',
    description: 'Gradient selecting tool built with React. Helps developers and designers find new gradient color schemes to use on their websites. User can filter by color to quickly find gradients for their projects. Save the gradients you love to your favorites and come back to them at any time - even if you close your browser.',
    liveLink: 'https://leo-generali.github.io/better-gradient-tool/',
    ghLink: 'https://github.com/leo-generali/better-gradient-tool'
  }
]

const Projects = () => (
  <div>
    {
      projects.map(project => {
        return (
          <Project key={project.id}>
            <div>
              <Title>{project.title}</Title>
            </div>
            <div>
              <Description>{project.description}</Description>
            </div>
            <StyledLink project href={project.liveLink} text='Live' />
            <StyledLink project href={project.ghLink} text='GitHub' />
          </Project>
        );
      })
    }
  </div>
)

export default Projects;