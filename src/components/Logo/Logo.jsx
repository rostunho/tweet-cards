import LogoIcon from 'icons/LogoIcon';
import { LogoWrapper } from './Logo.styled';

export default function Logo({ small, style }) {
  return (
    <LogoWrapper style={style} small={small}>
      <LogoIcon small={small} />
    </LogoWrapper>
  );
}
