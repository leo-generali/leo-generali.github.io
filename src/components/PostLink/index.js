import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'

const StyledPostLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  color: ${props => props.theme.linkColor};
  transition: 0.2s;

  :hover {
    color: ${props => props.theme.linkHover};
    text-decoration: none;
  }
`;

const Title = styled.span`

`;

const Date = styled.span`
  font-size: 14px;
  color: grey;
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const PostLink = ({ post }) => (
  <StyledPostLink to={post.frontmatter.path}>
    <Title>{post.frontmatter.title}</Title>
    <Date>{post.frontmatter.date}</Date>
  </StyledPostLink>
);

export default PostLink;
