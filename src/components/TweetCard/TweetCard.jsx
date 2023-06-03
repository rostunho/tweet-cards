import { useRetina } from 'hooks/useRetina';
import Logo from 'components/Logo/Logo';
import Avatar from 'components/Avatar/Avatar';
import Statistic from 'components/Statistic/Statistic';
import StatsItem from 'components/StatsItem/StatsItem';
import { CardContainer, UserInfo } from './TweetCard.styled';

export default function TweetCard() {
  const isRetina = useRetina();

  return (
    <CardContainer retina={isRetina}>
      <Logo small />
      <UserInfo style={{ marginTop: '176px' }}>
        <Avatar />
        <Statistic style={{ marginTop: '66px' }}>
          <StatsItem data="777" text="tweets" />
          <StatsItem data="100,500" text="followers" />
        </Statistic>
      </UserInfo>
    </CardContainer>
  );
}
