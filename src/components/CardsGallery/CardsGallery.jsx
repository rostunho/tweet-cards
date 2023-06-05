import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  useGetUsersPageQuery,
  useGetRefreshingUsersQuery,
} from 'redux/users/usersApi';
import { updatePageAction } from 'redux/page/actions';
import { scrollToBottom } from 'utils/scrollToBottom';
import TweetCard from 'components/TweetCard';
import LoadMoreButton from 'components/LoadMoreButton';
import { List } from './CardsGallery.styled';

export default function CardsGallery() {
  const page = useSelector(state => state.page.current);
  const { data: refreshingData, isFetching: isFetchingRefresh } =
    useGetRefreshingUsersQuery({ page });
  const [cards, setCards] = useState(refreshingData);
  const { data } = useGetUsersPageQuery({ page });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const autoScroll = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    scrollToBottom(autoScroll);
  }, [cards]);

  useEffect(() => {
    setCards(data);
  }, [data, refreshingData]);

  useEffect(() => {
    cards && setButtonDisabled(cards.length > 19);
  }, [cards]);

  const updatePage = () => {
    dispatch(updatePageAction(1));
  };

  return (
    <div style={{ position: 'relative' }}>
      <List>
        {cards &&
          cards.map(user => (
            <li key={user.id}>
              <TweetCard user={user} />
            </li>
          ))}
        <li ref={autoScroll} />
      </List>
      <LoadMoreButton
        text="load more"
        style={{ marginTop: '40px' }}
        onClick={updatePage}
        disabled={buttonDisabled}
      />
    </div>
  );
}
