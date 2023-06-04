import TweetCard from 'components/TweetCard/TweetCard';

import { useGetAllUsersQuery } from 'redux/users/usersApi';

export default function TweetsPage() {
  const { data, isLoading, isFetching } = useGetAllUsersQuery();

  console.log('data: ', data);
  console.log('loading: ', isLoading);
  console.log('fetching: ', isFetching);

  return (
    <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
      <TweetCard />
      <TweetCard />
      <TweetCard />
    </ul>
  );
}
