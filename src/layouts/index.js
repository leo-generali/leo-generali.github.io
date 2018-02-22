import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'

import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  max-width: 700px;
`;

const TemplateWrapper = ({ children }) => (
  <Container>
    <Helmet
      title='Leo Generali | Front End Developer'
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
  </Container>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
