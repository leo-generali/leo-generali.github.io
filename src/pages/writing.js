import React from "react";
import PostLink from "../components/PostLink";

import { styling, colors, delay } from '../utils/style'
import { Section, Container } from '../utils/shared';

import styled, { keyframes } from 'styled-components'

const Year = styled.h3`
  font-weight: 600;
  padding-left: 10px;
  border-left: 4px solid ${colors.primaryColor};
`;

const Writing = ({ data: { allMarkdownRemark: { edges } } }) => {
  const postsToFilter = edges
    .filter(edge => !!edge.node.frontmatter.date);

  const Post2018 = postsToFilter
    .filter(edge => {
      const date = new Date(edge.node.frontmatter.date);
      return date.getFullYear() === 2018;
    })
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Container>
      <Section delay={delay.fast}>
        <Year>2018</Year>
        {Post2018}
      </Section>
    </Container>
  );
};

export default Writing;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            emoji
            title
          }
        }
      }
    }
  }
`;