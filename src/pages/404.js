import React from 'react';

import styled from 'styled-components';

import { colors } from '../utils/style';

import { Section, Container } from '../utils/shared';


const Title = styled.h1`
  color: ${colors.primaryColor};
`;

const NotFoundPage = () => (
  <Container>
    <Title>Bad News...</Title>
    <p>You just hit a page that doesn't exist. Why don't you just hit the back button and we can forget this ever happened?.</p>
  </Container>
)

export default NotFoundPage;
