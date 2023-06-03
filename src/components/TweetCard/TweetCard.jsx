import { useRetina } from 'hooks/useRetina';
import Logo from 'components/Logo';
import Avatar from 'components/Avatar';
import Statistic from 'components/Statistic';
import StatsItem from 'components/StatsItem';
import FollowButton from 'components/FollowButton';
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
        <FollowButton style={{ marginTop: '26px' }} />
      </UserInfo>
    </CardContainer>
  );
}
