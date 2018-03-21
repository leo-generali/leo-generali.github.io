import React from 'react';
import Link from 'gatsby-link';

import { colors } from '../../utils/style';

import styled from 'styled-components';

const StyledPostLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  color: ${colors.linkColor};
  transition: 0.2s;
  margin-bottom: 10px;

  :hover {
    color: ${colors.linkHover};
    text-decoration: none;
  }
`;

const Emoji = styled.span`
  margin-right: 10px;
`;

const Title = Emoji.extend``;

const Date = styled.span`
  font-size: 14px;
  color: grey;
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const PostLink = ({ post }) => (
  <StyledPostLink to={post.frontmatter.path}>
    <Emoji>{post.frontmatter.emoji}</Emoji>
    <Title>{post.frontmatter.title}</Title>
    <Date>{post.frontmatter.date}</Date>
  </StyledPostLink>
);

export default PostLink;
