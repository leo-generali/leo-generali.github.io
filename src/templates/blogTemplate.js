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

  h2 {
    position: relative;

    :after {
      content: '';
      position: absolute;
      background-color: ${colors.primaryColor};
      width: 40px;
      height: 6px;
      bottom: -10px;
      left: 0;
    }
  }
`;

const Title = styled.h1`
  color: ${colors.primaryColor};
  margin-bottom: 0;
`;

const Date = styled.h3`
  margin-top: 0;
`;

const Body = styled.div``;


export default function Template({ data }){
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Post>
      <Title>{frontmatter.title}</Title>
      <Date>{frontmatter.date}</Date>
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
