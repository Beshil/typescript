import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProders';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>TOGGLE</button>
    </div>
  );
};

export default App;
