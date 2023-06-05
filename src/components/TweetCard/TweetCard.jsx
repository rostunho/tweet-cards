import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useUpdateUserMutation, usersApi } from 'redux/users/usersApi';
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
  const [currentUser, setCurrentUser] = useState(user);
  const [updateUserStatus, { data }] = useUpdateUserMutation(currentUser.id);
  const dispatch = useDispatch();

  // dispatch(usersApi.util.resetApiState());

  useEffect(() => {
    data && setCurrentUser(data);
  }, [data]);

  const toggleUserStatus = () => {
    updateUserStatus({
      id: currentUser.id,
      body: {
        isFollowedByMe: !currentUser.isFollowedByMe,
        followers: currentUser.isFollowedByMe
          ? currentUser.followers - 1
          : currentUser.followers + 1,
      },
    });
  };

  return (
    <CardContainer retina={isRetina}>
      <Logo small />
      <UserInfo style={{ marginTop: '176px' }}>
        <Avatar src={currentUser.avatar} />
        <Statistic style={{ marginTop: '66px' }}>
          <StatsItem data={currentUser.tweets} text="tweets" />
          <StatsItem
            data={toAppNumberFormat(currentUser.followers)}
            text="followers"
          />
        </Statistic>
        <FollowButton
          active={currentUser.isFollowedByMe}
          style={{ marginTop: '26px' }}
          onClick={toggleUserStatus}
        />
      </UserInfo>
    </CardContainer>
  );
}
