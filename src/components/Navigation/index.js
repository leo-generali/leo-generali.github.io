import React from 'react';
import Link from 'gatsby-link';

import { colors } from '../../utils/style';

import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  margin-bottom: 30px;

  @media (min-width: 600px) {
    justify-content: flex-end;
    margin-bottom: 0;
  }
`;

const StyledNavLink = styled(Link)`
  margin: 0 20px 0 0;
  font-weight: 600;
  color: ${colors.linkColor};
  transition: 0.2s;

  :hover {
    color: ${colors.linkHover};
    text-decoration: none;
  }

  @media (min-width: 600px) {
    margin: 0 0 0 20px;
  }
`;

const Projects = () => (
  <Nav>
    <StyledNavLink to="/">🏠 Home</StyledNavLink>
    {/* <StyledNavLink to="/writing">📕 Writing</StyledNavLink> */}
  </Nav>
)

export default Projects;