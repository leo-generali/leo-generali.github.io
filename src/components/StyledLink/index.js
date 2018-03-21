import React from 'react';
import Link from 'gatsby-link';

import styled from 'styled-components';

import { colors } from '../../utils/style';
import { AnchorStyle } from '../../utils/shared';

const Anchor = styled.a`
  ${ AnchorStyle }
`;

const StyledLink = ({ project, href, text }) => (
  <Anchor project={project} href={href}>{text}</Anchor>
)

export default StyledLink;