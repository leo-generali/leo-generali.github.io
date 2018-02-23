import styled, { keyframes } from 'styled-components';

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
  animation-fill-mode: backwards;
  animation-timing-function: ease-in-out;
  animation-name: ${fadeIn};
  animation-duration: 0.2s;
  animation-delay: ${props => props.delay};
  animation-iteration-count: 1;
  animation-direction: normal;
`;


