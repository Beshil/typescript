import './styles/index.scss';
import { Suspense } from 'react';
import { useTheme } from 'app/providers/ThemeProders';
import { classNames } from 'shared/lib/classNames/classNames';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Link, Routes, Route } from 'react-router-dom';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Главная </Link>
      <Link to={'/about'}>О сайте</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPage />} />
          <Route path='/' element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
