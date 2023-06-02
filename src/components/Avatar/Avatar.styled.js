import styled from 'styled-components';

export const AvatarWrapper = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;

  width: 380px;
  height: 80px;

  &::before,
  &::after {
    content: '';
    /* display: block; */
    position: absolute;

    top: 36px;
    width: 150px;
    height: 8px;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;

export const Photo = styled.img`
  display: block;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
`;
