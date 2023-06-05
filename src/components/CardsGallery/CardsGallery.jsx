import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetUsersPageQuery } from 'redux/users/usersApi';
import { updatePageAction } from 'redux/page/actions';
import { scrollToBottom } from 'utils/scrollToBottom';
import TweetCard from 'components/TweetCard';
import LoadMoreButton from 'components/LoadMoreButton';
import { List } from './CardsGallery.styled';

export default function CardsGallery() {
  const page = useSelector(state => state.page.current);
  const { data } = useGetUsersPageQuery(page);
  const autoScroll = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    scrollToBottom(autoScroll);
  }, [data]);

  return (
    <>
      <List>
        {data &&
          data.map(user => (
            <li key={user.id}>
              <TweetCard user={user} />
            </li>
          ))}
        <li ref={autoScroll} />
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
