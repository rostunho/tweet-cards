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
`;
