import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 20px;
  padding: 0 40px;

  width: 1280px;
  height: 460px;
  overflow: hidden auto;

  background-color: transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 4px;
    background: #ebd8ff;
    box-shadow: 3.44px 0px 3.43693px rgba(0, 0, 0, 0.06),
      inset -1.72px 0px 3.43693px #ae7be3, inset 3.44px 0px 2.5777px #fbf8ff;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: linear-gradient(
      114.99deg,
      #471ca9 -0.99%,
      #5736a3 54.28%,
      #4b2a99 78.99%
    );
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #5cd3a8;
  }
`;
