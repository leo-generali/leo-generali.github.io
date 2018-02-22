import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'

const Anchor = styled.a`
  font-weight: 600;
  color: ${props => props.theme.linkColor};
  margin-right: ${props => props.project ? '10px' : ''};
  transition: 0.2s;

  :hover {
    color: ${props => props.theme.linkHover};
    text-decoration: none;
  }
`;

const StyledLink = ({ project, href, text }) => (
  <Anchor project={project} href={href}>{text}</Anchor>
)

export default StyledLink;