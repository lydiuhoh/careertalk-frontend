import { css, keyframes } from 'styled-components';

/**
 * References:
 * css: https://www.styled-components.com/docs/api#css
 * keyframes: https://www.styled-components.com/docs/api#keyframes
 */

export const onActive = css`
  cursor: pointer;
  &:active {
    transform: ${props => (props.disabled ? 'none' : 'translateY(2px)')};
  }
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
