import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navigation from '../components/Navigation';

import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import { colors } from '../utils/style';

require('../utils/prism-theme.css');

injectGlobal`
  body {
    background-color: ${colors.backgroundColor};
    border-top: 8px solid ${colors.primaryColor};
  }

  ::selection {
    color: ${colors.backgroundColor};
    background-color: ${colors.linkColor};
  }

  ::-moz-selection {
    color: ${colors.backgroundColor};
    background-color: ${colors.linkColor};
  }

  @keyframes fadeIn{
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .section {
    animation-fill-mode: backwards;
    animation-timing-function: ease-in-out;
    animation-name: fadeIn;
    animation-duration: 0.2s;
    animation-iteration-count: 1;
    animation-direction: normal;
  }

  .fast { animation-delay: 0.2s }
  .slow { animation-delay: 0.4s }
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 20px 40px 100px;

  @media (min-width: 600px) {
    padding: 40px 100px;
  }
`;

const TemplateWrapper = ({ children }) => (
  <Container >
    <Helmet
      title='Leo Generali | Front End Developer'
      meta={[
        { name: 'description', content: 'Leo Generali is a Front End Developer in Washington DC. He creates thoughtfully designed web experiences with JavaScript and Rails.' },
        { name: 'keywords', content: 'front-end, javascript, css, sass, washington dc, ui, ux, react, redux, gatsby, rails' },
      ]}
    />
    <Navigation />
    {children()}
  </Container>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;
