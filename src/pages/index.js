import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
`;

const Intro = styled.section`

`;

const Hello = styled.span`
  display: block;
  margin-bottom: 20px;
`;




const IndexPage = () => (
  <Container>
    <section >
        <h1>Hey! 👋</h1>
        <h1>I'm Leo, a Front End Developer in Washington, DC. I like to build cool things with JavaScript, CSS, and HTML.</h1>
    </section>
    <section >
      <p>I'm currently working on a variety of Front End projects over at <a href='https://www.weddingwire.com/'>WeddingWire</a>. If you want to get in touch with me, you can find me on <a className='link link__body' href='https://twitter.com/itsLeeOhGee'>Twitter</a>, <a href='https://www.linkedin.com/in/leogenerali/' className='link link__body'>LinkedIn</a>, or <a href='https://github.com/leo-generali' className='link link__body'>Github</a>. If you want to say hello, you can email me <a href='mailto:me@leogenerali.com?Subject=Hello!' className='link link__body'>here</a>.</p>
      <p>If I'm not coding, I'm probably out running. I try and post all of my runs on Strava. If that sounds like your type of thing, you can check that out over <a href='https://www.strava.com/athletes/11876587' className='link link__body'>here</a>.</p>
    </section>
    {/* <Projects /> */}
  </Container>
)

export default IndexPage
