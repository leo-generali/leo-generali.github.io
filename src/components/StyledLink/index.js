import React from 'react';
import Link from 'gatsby-link';

import styled from 'styled-components';

import { colors } from '../../utils/style';

const Anchor = styled.a`
  font-weight: 600;
  color: ${colors.linkColor};
  margin-right: ${props => props.project ? '10px' : ''};
  transition: 0.2s;
  border-bottom: 1px dotted ${colors.linkColor};

  :hover {
    color: ${colors.linkHover};
    text-decoration: none;
    border-bottom: 1px dotted ${colors.linkHover};
  }
`;

const StyledLink = ({ project, href, text }) => (
  <Anchor project={project} href={href}>{text}</Anchor>
)

export default StyledLink;