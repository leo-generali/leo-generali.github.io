import React from "react";

import styled from 'styled-components'

import { styling, colors } from '../utils/style'

const Post = styled.main`
  max-width: ${styling.maxWidth};
`;

const Title = styled.h1`
  color: ${props => colors.primaryColor};
`;

const Date = styled.h2`

`;

const Body = styled.div`

`;


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Post>
      <Title >{frontmatter.title}</Title>
      <Date>{frontmatter.date}</Date>
      <Body dangerouslySetInnerHTML={{ __html: html }} />
    </Post>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

