import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetUsersPageQuery } from 'redux/users/usersApi';
import { updateCardsAction, updatePageAction } from 'redux/cards/actions';
import TweetCard from 'components/TweetCard';
import LoadMoreButton from 'components/LoadMoreButton';
import { List } from './CardsGallery.styled';

export default function CardsGallery() {
  const cards = useSelector(state => state.cards.items);
  const page = useSelector(state => state.cards.currentPage);
  const [limit] = useState(3);

  const { data } = useGetUsersPageQuery({ page, limit });

  const { data: newData } = useGetUsersPageQuery({ page: page + 1, limit });

  const dispatch = useDispatch();

  //   console.log('data:', data);
  //   console.log('newData:', newData);
  //   console.log('cards: ', cards);
  //   console.log('page:', page);

  useEffect(() => {
    data && cards.length === 0 && dispatch(updateCardsAction(data));
  }, [data]);

  useEffect(() => {
    newData && dispatch(updateCardsAction(newData));
  }, [page]);

  return (
    <>
      <List>
        {cards &&
          cards.map(user => (
            <li key={user.id}>
              <TweetCard user={user} />
            </li>
          ))}
        {/* <TweetCard />
        <TweetCard />
        <TweetCard /> */}
      </List>
      <LoadMoreButton
        text="load more"
        style={{ marginTop: '40px' }}
        onClick={() => {
          dispatch(updatePageAction());
        }}
      />
    </>
  );
}
