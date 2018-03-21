import styled, { keyframes, css } from 'styled-components';
import { styling, colors } from './style.js';

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Section = styled.section`
  margin-bottom: 30px;
  /* animation-fill-mode: backwards;
  animation-timing-function: ease-in-out;
  animation-name: ${fadeIn};
  animation-duration: 0.2s;
  animation-delay: ${props => props.delay};
  animation-iteration-count: 1;
  animation-direction: normal; */
`;

export const AnchorStyle = css`
  font-weight: 600;
  color: ${ colors.linkColor };
  margin-right: ${ props => props.project ? '10px' : '' };
  transition: 0.2s;
  border-bottom: 1px dotted ${ colors.linkColor };

  :hover {
    color: ${ colors.linkHover };
    text-decoration: none;
    border-bottom: 1px dotted ${ colors.linkHover };
  }
`;

export const Container = styled.div`
  max-width: ${styling.maxWidth};
  margin: 0 auto;
`;




