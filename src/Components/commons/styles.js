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

export const shadowBox = css`
  box-shadow: 0px 4px 6px rgba(50, 50, 93, 0.11), 0px 1px 3px ${props => props.theme.greyColor};
`;

export const onHoverEffect = css`
  &:hover {
    box-shadow: 0px 2px 3px 1px rgba(50, 50, 93, 0.55);
    transition: 0.2s box-shadow;
  }
`;

export const onLoading = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 100;
  }
  100% {
    opacity: 0;
  }
`;
