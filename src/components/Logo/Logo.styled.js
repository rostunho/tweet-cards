import styled from 'styled-components';

export const LogoWrapper = styled.div`
  cursor: pointer;
  height: ${({ small }) => (small ? '22px' : '66px')};
`;
