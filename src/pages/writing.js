import React from 'react';
import PostLink from '../components/PostLink';

import { styling, colors, delay } from '../utils/style';
import { Container } from '../utils/shared';

import styled, { keyframes } from 'styled-components';

const Year = styled.h3`
  font-weight: 600;
  padding-left: 10px;
  border-left: 4px solid ${colors.primaryColor};
`;

const Writing = ({ data: { allMarkdownRemark: { edges } } }) => {
  const postsToFilter = edges
    .map(edge => <PostLink post={edge.node} />);

  return (
    <Container>
      <div className='section fast'>
        <Year>2018</Year>
        {postsToFilter}
      </div>
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