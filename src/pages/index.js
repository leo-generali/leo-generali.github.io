import React from 'react';
import Link from 'gatsby-link';

import Projects from '../components/Projects';
import StyledLink from '../components/StyledLink';

import { styling, colors, delay } from '../utils/style';
import { Container } from '../utils/shared';

import styled, { keyframes } from 'styled-components';

const HelloText = styled.h1`
  color: ${colors.primaryColor};
`;

const IndexPage = () => (
  <Container>
    <div>
        <HelloText>Hey! 👋</HelloText>
        <HelloText>I'm Leo, a Front End Developer in Washington, DC.</HelloText>
    </div>
    <div>
      <p>I'm currently working on a variety of Front End projects over at <StyledLink href='https://www.weddingwire.com/' text='WeddingWire'/>.</p>
      <p>If you want to get in touch with me, you can find me on <StyledLink href='https://twitter.com/itsLeeOhGee' text='Twitter' />, <StyledLink href='https://www.linkedin.com/in/leogenerali/' text='LinkedIn' />, or <StyledLink href='https://github.com/leo-generali' text='Github' />. If you want to say hello, you can email me <StyledLink href='mailto:me@leogenerali.com?Subject=Hello!' text='here' />.</p>
      <p>If I'm not coding, I'm probably out running. I try and post all of my runs on Strava. If that sounds like your type of thing, you can check that out over <StyledLink href='https://www.strava.com/athletes/11876587' text='here' />.</p>
      <p>I also enjoy building tools that solve problems. I get to help others out, and I learn a thing or two in the process. Here are some of the cooler things I've made:</p>
      <Projects />
    </div>
  </Container>
)

export default IndexPage;
