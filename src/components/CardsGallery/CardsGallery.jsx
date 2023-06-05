import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetUsersPageQuery } from 'redux/users/usersApi';
// import { updateCardsAction, updatePageAction } from 'redux/cards/actions';
import TweetCard from 'components/TweetCard';
import LoadMoreButton from 'components/LoadMoreButton';
import { List } from './CardsGallery.styled';
import { updatePageAction } from 'redux/current-page/actions';

export default function CardsGallery() {
  const page = useSelector(state => state.page.current);
  const { data } = useGetUsersPageQuery(page);
  const dispatch = useDispatch();

  console.log('page: ', page);
  console.log('data: ', data);

  return (
    <>
      <List>
        {data &&
          data.map(user => (
            <li key={user.id}>
              <TweetCard user={user} />
            </li>
          ))}
      </List>
      <LoadMoreButton
        text="load more"
        style={{ marginTop: '40px' }}
        onClick={() => {
          dispatch(updatePageAction(1));
        }}
      />
    </>
  );
}
