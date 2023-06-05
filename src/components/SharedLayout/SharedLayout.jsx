import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import Spinner from 'components/Spinner/Spinner';
import { Main } from './SharedLayout.styles';

export default function SharedLayout() {
  return (
    <>
      <Header />
      <Main>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
}
