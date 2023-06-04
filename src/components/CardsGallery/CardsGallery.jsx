import { useState } from 'react';
import { useGetUsersPageQuery } from 'redux/users/usersApi';
import TweetCard from 'components/TweetCard';
import LoadMoreButton from 'components/LoadMoreButton';
import { List } from './CardsGallery.styled';

export default function CardsGallery() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const { data: users, isFetching } = useGetUsersPageQuery({ page, limit });

  console.log(users);

  return (
    <>
      <List>
        {users &&
          users.map(user => (
            <li key={user.id}>
              <TweetCard user={user} />
            </li>
          ))}
        {/* <TweetCard />
        <TweetCard />
        <TweetCard /> */}
      </List>
      <LoadMoreButton text="load more" style={{ marginTop: '40px' }} />
    </>
  );
}
