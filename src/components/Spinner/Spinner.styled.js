import styled from 'styled-components';
import { spin } from 'animations/spin';

export const BackDrop = styled.div`
  position: absolute;
  z-index: 100;
  top: 51%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 640px;
  background-color: rgba(235, 216, 255, 0.25);
  border-radius: 20px;
`;

export const Spin = styled.div`
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;

  width: 150px;
  height: 150px;
  border: 15px solid transparent;
  border-top: 15px solid #5cd3a8;
  border-left: 15px solid #5cd3a8;
  border-bottom: 15px solid #5cd3a8;
  border-right: 15px solid rgba(235, 216, 255, 0.25);
  border-radius: 50%;

  animation-name: ${spin};
  animation-duration: 0.75s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  /* &--small {
    top: 35%;
    left: 50%;
    width: 100px;
    height: 100px;
    border: 10px solid transparent;
    border-top: 10px solid rgb(0, 0, 0, 0.3);
    border-left: 10px solid rgb(0, 0, 0, 0.3);
    border-bottom: 10px solid rgb(0, 0, 0, 0.3);
    border-right: 10px solid $accentColor;
  } */
`;
