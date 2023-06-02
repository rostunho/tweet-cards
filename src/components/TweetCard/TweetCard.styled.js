import styled from 'styled-components';
import img1x from 'images/bg-image-1x.png';
import img2x from 'images/bg-image-2x.png';
import img3x from 'images/bg-image-3x.png';

export const CardContainer = styled.div`
  width: 380px;
  height: 460px;
  padding: 20px;

  border-radius: 20px;
  background-repeat: no-repeat;
  background-position: 36px 28px, top right;
  background-image: url(${img1x}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;
