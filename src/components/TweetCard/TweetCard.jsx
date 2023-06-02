import { useRetina } from 'hooks/useRetina';
import Logo from 'components/Logo/Logo';
import Avatar from 'components/Avatar/Avatar';
import { CardContainer } from './TweetCard.styled';

export default function TweetCard() {
  const isRetina = useRetina();

  return (
    <CardContainer retina={isRetina}>
      <Logo small />
      <Avatar style={{ marginTop: '136px' }} />
    </CardContainer>
  );
}
