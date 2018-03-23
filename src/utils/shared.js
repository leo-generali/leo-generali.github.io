import styled, { keyframes, css } from 'styled-components';
import { styling, colors } from './style.js';

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




