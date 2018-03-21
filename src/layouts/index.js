import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navigation from '../components/Navigation';

import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import { colors } from '../utils/style';

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

  pre {
    overflow-y: auto;
  }

  code {
    background-color: hsla(50, 100%, 60%, 0.2);
    border-radius: 3px;
    font-family: 'SFMono-Regular', Consolas, 'Roboto Mono','Droid Sans Mono','Liberation Mono',Menlo,Courier,monospace;
    padding: 0.2em;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 100px 40px;
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
