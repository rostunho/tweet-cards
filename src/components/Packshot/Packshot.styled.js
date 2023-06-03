import styled from 'styled-components';

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
  }
`;

export const Heading = styled.h1``;

export const Text = styled.span`
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

  &:last-child {
    color: #ffffff;
    margin-bottom: 45px;
  }
`;

export const Greeting = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 52px;
  line-height: 52px;

  letter-spacing: 0.075em;
  text-transform: uppercase;

  color: #ffffff;

  margin-bottom: 45px;
`;
