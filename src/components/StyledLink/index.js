import React from 'react'
import Link from 'gatsby-link'

import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0%, 100% { color: #FAD390; }
  20%      { color: #F8C291; }
  40%      { color: #2ECC40; }
  60%      { color: #FFDC00; }
  80%      { color: #B10DC9; }
`;

const Anchor = styled.a`
  font-weight: 600;

  :hover {
    animation: ${fadeIn} 4s infinite;
    text-decoration: none;
  }
`;

const StyledLink = ({ href, text }) => (
  <Anchor href={href}>{text}</Anchor>
)

export default StyledLink;