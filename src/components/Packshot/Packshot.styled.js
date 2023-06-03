import styled, { keyframes } from 'styled-components';

const fadeInToDown = keyframes`
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const fadeInToRight = keyframes`
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
`;

const lineFadeDown = keyframes`
  from {
    scale: 1 0;
  }
  to {
    scale: 1 1;
  }
`;

const fadeTextSpacing = keyframes`
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

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* justify-content: center; */

  width: 408px;
  margin: 64px auto 0;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 14px;
    left: 0;

    width: 8px;
    height: 328px;

    background: #ebd8ff;
    box-shadow: 3.44px 0px 3.43693px rgba(0, 0, 0, 0.06),
      inset -1.72px 0px 3.43693px #ae7be3, inset 3.44px 0px 2.5777px #fbf8ff;

    transform-origin: top center;
    animation-name: ${lineFadeDown};
    animation-timing-function: ease-in;
    animation-duration: 1000ms;
    animation-delay: 500ms;
    animation-fill-mode: backwards;
  }
`;

export const Heading = styled.h1``;

export const Tweet = styled.span`
  display: block;
  margin-left: auto;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 100px;
  line-height: 1;
  text-transform: uppercase;

  color: #5cd3a8;
  text-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  animation-name: ${fadeInToDown};
  animation-timing-function: ease-in;
  animation-duration: 1000ms;
`;

export const Cards = styled(Tweet)`
  color: #ffffff;
  margin-bottom: 45px;

  animation-name: ${fadeInToRight};
  animation-timing-function: ease-in;
  animation-duration: 1000ms;
  animation-delay: 250ms;
  animation-fill-mode: backwards;
`;

export const Greeting = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 52px;
  line-height: 52px;

  letter-spacing: 3px;
  text-transform: uppercase;

  color: #ffffff;

  transform-origin: center left;
  animation-name: ${fadeTextSpacing};
  animation-timing-function: ease-in;
  animation-duration: 1000ms;
  animation-delay: 1000ms;

  animation-fill-mode: backwards;
`;
