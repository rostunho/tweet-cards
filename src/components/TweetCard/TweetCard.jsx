import { useUpdateUserMutation } from 'redux/users/usersApi';
import { useRetina } from 'hooks/useRetina';
import { toAppNumberFormat } from 'utils/toAppNumberFormat';
import Logo from 'components/Logo';
import Avatar from 'components/Avatar';
import Statistic from 'components/Statistic';
import StatsItem from 'components/StatsItem';
import FollowButton from 'components/FollowButton';
import { CardContainer, UserInfo } from './TweetCard.styled';

export default function TweetCard({ user }) {
  const isRetina = useRetina();
  const [updateUserStatus, result] = useUpdateUserMutation();

  const toggleUserStatus = (id, status) => {
    updateUserStatus({
      id: id,
      body: {
        isFollowedByMe: !user.isFollowedByMe,
        followers: user.isFollowedByMe
          ? user.followers - 1
          : user.followers + 1,
      },
    });
  };

  return (
    <CardContainer retina={isRetina}>
      <Logo small />
      <UserInfo style={{ marginTop: '176px' }}>
        <Avatar src={user.avatar} />
        <Statistic style={{ marginTop: '66px' }}>
          <StatsItem data={user.tweets} text="tweets" />
          <StatsItem
            data={toAppNumberFormat(user.followers)}
            text="followers"
          />
        </Statistic>
        <FollowButton
          active={user.isFollowedByMe}
          style={{ marginTop: '26px' }}
          onClick={() => toggleUserStatus(user.id)}
        />
      </UserInfo>
    </CardContainer>
  );
}
