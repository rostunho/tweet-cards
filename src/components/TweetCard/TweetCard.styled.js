import styled, { css } from 'styled-components';
import img1x from 'images/bg-image.png';
import img2x from 'images/bg-image@2x.png';

export const CardContainer = styled.div`
  /* position: relative; */

  width: 380px;
  height: 460px;
  padding: 20px 20px 36px;

  border-radius: 20px;
  background-repeat: no-repeat;
  background-position: 36px 28px, top right;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);

  background-image: url(${img1x}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);

  ${({ retina }) =>
    retina &&
    css`
      background-image: url(${img2x}),
        linear-gradient(
          114.99deg,
          #471ca9 -0.99%,
          #5736a3 54.28%,
          #4b2a99 78.99%
        );

      background-size: 308px 168px, 380px 460px;
    `}
`;

export const UserInfo = styled.div`
  position: relative;
  height: 242px;
  padding-top: 66px;
`;
