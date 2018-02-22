import React from 'react';
import Link from 'gatsby-link';

import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
`;

const StyledNavLink = styled(Link)`
  margin-left: 20px;
  font-weight: 600;
  color: ${props => props.theme.linkColor};

  :hover {
    text-decoration: none;
  }
`;

const Projects = () => (
  <Nav>
    <StyledNavLink to="/">Home</StyledNavLink>
    <StyledNavLink to="/writing">📕 Writing</StyledNavLink>
  </Nav>
)

export default Projects;