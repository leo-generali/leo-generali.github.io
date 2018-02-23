import React from "react";
import PostLink from "../components/PostLink";

import { styling, colors, transition } from '../utils/style'

import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px)
  }
`;

const Section = styled.div`
  animation: ${fadeIn} ${props => props.delay} ease-in-out;
`;

const Year = styled.h3`
  font-weight: 600;
  padding-left: 10px;
  border-left: 4px solid ${props => colors.primaryColor};
`;

const Posts = styled.div`
  max-width: ${styling.maxWidth};
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
    <Posts>
      <Section delay={transition.fast}>
        <Year>2018</Year>
        {Post2018}
      </Section>
    </Posts>
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