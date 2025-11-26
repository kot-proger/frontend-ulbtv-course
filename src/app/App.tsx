import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { AppRouter } from './providers/router';

const App = () => {
  return (
    <div className={classNames('app', {}, [])}>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <div className='content-page '>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
export default App;
