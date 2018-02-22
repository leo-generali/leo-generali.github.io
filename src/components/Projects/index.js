import React from 'react';
import Link from 'gatsby-link';

import StyledLink from '../StyledLink'

import styled from 'styled-components';

// To add back in once the blog post has been written.
// <Link className="project-link project-link--post" to="/better-gradient-tool">About</Link>

const Title = styled.p`
  font-weight: 600;
`;

const projects = [
  {
    id: 1,
    title: 'Better Gradient Tool',
    bulletColor: 'red',
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
          <div key={project.id}>
            <Title>{project.title}</Title>
            <div>
              <p>{project.description}</p>
            </div>
            <div>
              <StyledLink project href={project.liveLink} text='Live' />
              <StyledLink href={project.liveLink} text='GitHub' />
            </div>
          </div>
        );
      })
    }
  </div>
)

export default Projects;