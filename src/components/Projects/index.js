import React from 'react';
import Link from 'gatsby-link';

// Styles
import StyledLink from '../StyledLink'
import styled from 'styled-components';

import { colors, delay } from '../../utils/style'

// To add back in once the blog post has been written.
// <Link className="project-link project-link--post" to="/better-gradient-tool">About</Link>

const projectColors = ['#a55eea']

const Description = styled.p`
  color: #818080;
  padding: 0 0 0 20px;
  border-left: 5px solid #818080;
`;

const Project = styled.div`
  margin-bottom: 30px;
  transition: ${delay.fast};

  :hover ${Description} {
    transition: ${delay.fast};
    border-left: 5px solid ${colors.primaryColor};
  }
`;

const Title = styled.p`
  color: #000000;
  font-size: 20px;
  font-weight: 600;
`;

const projects = [
  {
    id: 1,
    title: 'Better Gradient Tool',
    emoji: '🎨',
    description: 'Gradient selecting tool built with React. Helps developers and designers find new gradient color schemes to use on their websites. User can filter by color to quickly find gradients for their projects. Save the gradients you love to your favorites and come back to them at any time - even if you close your browser.',
    liveLink: 'https://leo-generali.github.io/better-gradient-tool/',
    ghLink: 'https://github.com/leo-generali/better-gradient-tool'
  },
  {
    id: 2,
    title: 'Personal Strava Dashboard',
    emoji: '🎽',
    description: 'A constant work in progress, something I\'m always working on. Pulls data from my public Strava running log to display in fun and interesting ways. I\'m always adding new features and visualizations to it so check back often - it may have changed pretty dramatically! Kept it simple: built with React and Styled-Components.',
    liveLink: 'https://vigilant-murdock-476b55.netlify.com/',
    ghLink: 'https://github.com/leo-generali/prefontaine'
  },
]

const Projects = () => (
  <div>
    {
      projects.map(project => {
        return (
          <Project key={project.id}>
            <Title>{`${project.title} ${project.emoji}`}</Title>
            <Description>{project.description}</Description>
            <StyledLink project href={project.liveLink} text='Live' />
            <StyledLink project href={project.ghLink} text='GitHub' />
          </Project>
        );
      })
    }
  </div>
)

export default Projects;