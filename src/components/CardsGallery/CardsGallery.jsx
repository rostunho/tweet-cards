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
import Spinner from 'components/Spinner/Spinner';
import { List } from './CardsGallery.styled';

export default function CardsGallery() {
  const page = useSelector(state => state.page.current);
  const { data: refreshingData, isFetching: isFetchingRefresh } =
    useGetRefreshingUsersQuery({ page });
  const [cards, setCards] = useState(refreshingData);
  const { data, isFetching: isFetchingData } = useGetUsersPageQuery({ page });
  const autoScroll = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    scrollToBottom(autoScroll);
  }, [cards]);

  useEffect(() => {
    setCards(data);
  }, [data, refreshingData]);

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
      />
      {isFetchingRefresh || (isFetchingData && <Spinner />)}
    </div>
  );
}
