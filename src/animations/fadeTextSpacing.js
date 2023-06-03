import { keyframes } from 'styled-components';

export const fadeTextSpacing = keyframes`
  from {
    letter-spacing: 1px;
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    letter-spacing: 3px;
    opacity: 1;
    transform: translateX(0px);
  }
`;
