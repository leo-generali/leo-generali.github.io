import React from 'react';
import Link from 'gatsby-link';

import { colors } from '../../utils/style';

import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    transform: translateY(0px);
    opacity: 0;
  }

  to {
    transform: translateY(2px);
    opacity: 1;
  }
`;

const Nav = styled.nav`
  display: flex;
  margin-bottom: 30px;

  @media (min-width: 600px) {
    justify-content: flex-end;
    margin-bottom: 0;
  }
`;

const activeClassName = 'active';

const StyledNavLink = styled(Link).attrs({
  activeClassName
})`
  margin: 0 20px 0 0;
  font-weight: 600;
  color: ${colors.linkColor};
  transition: 0.2s;
  position: relative;

  :hover {
    color: ${colors.linkHover};
    text-decoration: none;
  }

  :after {
    content: '';
    border-bottom: 2px dotted #EEE;
    width: 100%;
    height: 10%;
    /* background-color: #; */
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
  }

  @media (min-width: 600px) {
    margin: 0 0 0 20px;
  }

  &.${activeClassName} {

    :after {
      animation-timing-function: ease-in-out;
      animation-name: ${fadeIn};
      animation-duration: 0.2s;
      animation-delay: none;
      animation-iteration-count: 1;
      animation-direction: normal;
      transform: translateY(2px);
      content: '';
      width: 100%;
      height: 10%;
      border-bottom: 2px dotted ${colors.linkColor};
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: -1;
    }
  }
`;

const Projects = () => (
  <Nav>
    <StyledNavLink exact to="/">🏠 Home</StyledNavLink>
    <StyledNavLink exact to="/writing">📕 Writing</StyledNavLink>
  </Nav>
)

export default Projects;