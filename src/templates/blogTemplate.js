import React from 'react';

import styled from 'styled-components';

import { styling, colors } from '../utils/style';
import { AnchorStyle, Container } from '../utils/shared';

const Post = Container.extend`
  a {
    ${ AnchorStyle }
  }

  p > img {
    display: block;
    margin: 0 auto;
  }

  h3 {
    position: relative;
    margin: 1.5rem 0 1.25rem;

    :after {
      content: '';
      position: absolute;
      background-color: ${colors.primaryColor};
      width: 40px;
      height: 3px;
      bottom: -10px;
      left: 0;
    }
  }
`;

const Title = styled.h1`
  color: ${colors.primaryColor};
`;

const Date = styled.h2``;

const Body = styled.div``;


export default function Template({ data }) {
  console.log(data);
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Post>
      <Date>{frontmatter.date}</Date>
      <Title>{frontmatter.title}</Title>
      <Body dangerouslySetInnerHTML={{ __html: html }} />
    </Post>
  );
};

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
