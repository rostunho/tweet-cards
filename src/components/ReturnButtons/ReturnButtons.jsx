import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import GoBackIcon from 'icons/GoBackIcon';
import RefreshIcon from 'icons/RefreshIcon';
import { List, Button } from './ReturnButtons.styled';

export default function ReturnButtons() {
  const navigate = useNavigate();

  const onBackClick = () => {
    navigate('/profile', { replace: true });
  };

  const onRefreshClick = () => {
    localStorage.clear('persist:tweet-page');
    localStorage.clear('persist:tweet-api');
    window.location.reload();
  };

  return (
    <List>
      <li>
        <Button type="button" title="Go Back" onClick={onBackClick}>
          <GoBackIcon />
        </Button>
      </li>
      <li>
        <Button type="button" title="Refresh" onClick={onRefreshClick}>
          <RefreshIcon />
        </Button>
      </li>
    </List>
  );
}
