import { keyframes } from 'styled-components';

// Maybe eventually I'll get this working! 🙁
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

export const styling = {
  maxWidth: '600px'
};

export const transition = {
  fast: '0.25s',
  medium: '0.4s',
  slow: '0.7s',
  superSlow: '1s'
};

export const colors = {
  backgroundColor: '#FDFFFC',
  primaryColor: '#2E69E6;',
  linkColor: '#FF7040',
  linkHover: '#B2313C'
};